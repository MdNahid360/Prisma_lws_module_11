import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const pins = await db.Pin.findMany({
            orderBy: {
                createdAt: "desc",}
        });

        return NextResponse.json(pins, { status: 200 });
    } catch (error) {
        console.error("Post creating pin error:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
      }
}