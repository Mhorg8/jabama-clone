import client from "@/app/lib/prisma";
import { nanoid } from "@reduxjs/toolkit";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const subtitle = formData.get("subtitle") as string;
    const desc = formData.get("desc") as string;
    const image = formData.get("image") as File | null;

    if (!title || !subtitle || !desc || !image) {
      return NextResponse.json(
        {
          message: "please fill all inputs",
        },
        { status: 500 }
      );
    }

    const isExist = await client.blog.findUnique({
      where: {
        title: title as string,
      },
    });

    if (isExist) {
      return NextResponse.json(
        {
          message: "Blog already exist pls try another title",
        },
        { status: 409 }
      );
    }

    if (image) {
      const uniqueFileName = `${nanoid()}_${image.name}`;
      const path = join(process.cwd(), "public", uniqueFileName);

      //   convert image to buffer anr write to public folder
      const buffer = Buffer.from(await image.arrayBuffer());
      await writeFile(path, buffer);

      const fileUrl = `/${uniqueFileName}`;

      const blog = await client.blog.create({
        data: {
          title: title,
          subtitle: subtitle,
          desc: desc,
          image: fileUrl as string,
        },
      });

      return NextResponse.json(
        {
          message: "Blog created successfully",
          blog,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "failed to send response to client",
        error,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { locationId } = await req.json();

    if (!locationId) {
      return NextResponse.json(
        { message: "pls provide blog id" },
        { status: 500 }
      );
    }

    await client.blog.delete({
      where: {
        id: locationId as string,
      },
    });

    return NextResponse.json(
      {
        message: "Blog deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
  }
}
