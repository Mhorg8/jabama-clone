import client from "@/app/lib/prisma";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import { nanoid } from "nanoid"; // to generate unique file names

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const image = formData.get("image") as File | null;

    if (!name || !image) {
      return NextResponse.json(
        { message: "Please fill all fields" },
        { status: 400 }
      );
    }

    const isExist = await client.location.findUnique({
      where: {
        location: name as string,
      },
    });

    if (isExist) {
      return NextResponse.json(
        { message: "Location already exists" },
        { status: 409 }
      );
    }

    // Generate unique file name to avoid conflicts
    const uniqueFileName = `${nanoid()}_${image.name}`;
    const path = join(process.cwd(), "public", uniqueFileName);

    // Read image file buffer and save it
    const buffer = Buffer.from(await image.arrayBuffer());
    await writeFile(path, buffer);

    // File URL to store in the database
    const fileUrl = `/${uniqueFileName}`;

    const location = await client.location.create({
      data: {
        location: name,
        images: fileUrl,
      },
    });

    return NextResponse.json(
      { message: "Location created successfully", location },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error: ", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
export async function DELETE(req: NextRequest) {
  try {
    const { locationId } = await req.json();

    if (!locationId) {
      return NextResponse.json(
        { message: "pls provide location id" },
        { status: 500 }
      );
    }

    await client.location.delete({
      where: {
        id: locationId as string,
      },
    });

    return NextResponse.json(
      { message: "delete item successfully " },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
