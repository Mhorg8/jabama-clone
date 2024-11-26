import client from "@/app/lib/prisma";
import { nanoid } from "@reduxjs/toolkit";
import bcrypt from "bcryptjs";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { email, username, password, isLogin } = data;
  if (!email || !password || !username) {
    return NextResponse.json({
      message: "Please fill in all fields",
      status: 500,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const isExist = await client.user.findUnique({
    where: {
      email: email,
    },
  });

  if (isExist) {
    return NextResponse.json(
      { message: "email already exists" },
      { status: 409 }
    );
  } else {
    const user = await client.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
        isLogin: isLogin,
      },
    });
    return NextResponse.json(
      { message: "user created successfully", user },
      { status: 200 }
    );
  }
}

export async function GET() {
  const users = await client.user.findMany();

  return NextResponse.json({ users });
}

export async function DELETE(req: NextRequest) {
  try {
    const { locationId } = await req.json();

    if (!locationId) {
      return NextResponse.json(
        { message: "id is not provided" },
        { status: 500 }
      );
    }

    await client.user.delete({
      where: {
        id: locationId,
      },
    });

    return NextResponse.json({ message: "user deleted successfully " });
  } catch (error) {
    console.error(error);
  }
}

export async function UPDATE(req: NextRequest) {
  try {
    const formData = await req.formData();
    const username = formData.get("username") as string | null;
    const email = formData.get("email") as string;
    const image = formData.get("image") as File | null;
    const password = formData.get("password") as string | null;

    // Check if the user exists
    const isExist = await client.user.findUnique({
      where: { email },
    });

    if (!isExist) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    let imageUrl = isExist.image;

    // If an image is provided, upload and update image URL
    if (image) {
      const uniqueFileName = `${nanoid()}_${image.name}`;
      const path = join(process.cwd(), "public", uniqueFileName);
      const buffer = Buffer.from(await image.arrayBuffer());
      await writeFile(path, buffer);
      imageUrl = `/${uniqueFileName}`;
    }

    // Hash the new password if provided
    let hashedPassword = isExist.password;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 12);
    }

    // Update the user with the new details
    const updatedUser = await client.user.update({
      where: { email },
      data: {
        username: username || isExist.username,
        image: imageUrl,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "User updated successfully", user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { message: "Error updating user", error: error },
      { status: 500 }
    );
  }
}
