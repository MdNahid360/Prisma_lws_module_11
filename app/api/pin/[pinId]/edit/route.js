import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function PUT(req, { params }) {
    try {
        if (!params.pinId) {
            return new NextResponse("Not found", { status: 400 });
        }

        const { title, description, type, content } = await req.json();
        const updatePin = await db.Pin.update({
            where: {
                id: params.pinId
            },
            data: {
                title,
                description,
                type,
                content
            }
        });

        return NextResponse.json(updatePin, { status: 200 });
    } catch (error) {
        console.log('Update pin error: ', error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}