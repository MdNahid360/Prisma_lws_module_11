 import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json();
    console.log("Request Body:", body);

  try {

    const { title, description, type, content } = body;

    if (!title || !description || !type || !content) {
      return new NextResponse("All fields are required", { status: 400 });
    }

    const pin = await db.Pin.create({
      data: {
        title,
        description,
        type,
        content,
      },
    });

    console.log("Created Pin:", pin);
    return NextResponse.json(pin, { status: 201 });
  } catch (error) {
    console.error("Post creating pin error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
