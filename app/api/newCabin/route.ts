import client from "@/app/lib/prisma";
import { nanoid } from "@reduxjs/toolkit";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const location = formData.get("location") as string;
    const name = formData.get("name") as string;
    const price = parseFloat(formData.get("price") as string); // Convert to number
    const rate = parseFloat(formData.get("rate") as string); // Convert to number
    const bed = parseInt(formData.get("bed") as string); // Convert to number
    const room = parseInt(formData.get("room") as string); // Convert to number
    const image = formData.get("image") as File | null;

    if (!name || !location) {
      return NextResponse.json(
        { message: "Name or location not provided" },
        { status: 400 }
      );
    }

    // Check if a cabin with the same name already exists
    const isExist = await client.cabin.findUnique({
      where: {
        name: name,
      },
    });

    if (isExist) {
      return NextResponse.json(
        { message: "Cabin already exists. Please change the name." },
        { status: 409 }
      );
    }

    let fileUrl: string | null = null;

    // Handle image upload
    if (image) {
      const uniqueFileName = `${nanoid()}_${image.name}`;
      const path = join(process.cwd(), "public", uniqueFileName);

      // Convert image to buffer and write to the public directory
      const buffer = Buffer.from(await image.arrayBuffer());
      await writeFile(path, buffer);

      // Set the URL of the image
      fileUrl = `/${uniqueFileName}`;
    }

    // Create a new cabin in the database
    const cabin = await client.cabin.create({
      data: {
        location: location,
        name: name,
        price: price,
        room: room,
        bed: bed,
        rate: rate,
        images: fileUrl as string,
      },
    });

    return NextResponse.json(
      { message: "Cabin created successfully", cabin },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating cabin:", error);
    return NextResponse.json(
      { message: "Error creating cabin", error },
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

    await client.cabin.delete({
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
