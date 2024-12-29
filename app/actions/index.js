"use server"

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPin(formData) {
    const title = formData.get("title");
    const description = formData.get("description");
    const type = formData.get("type");
    const content = formData.get("content");

    try {
        const pin = await db.Pin.create({
            data: {
                title,
                description,
                type,
                content,
            },
        });

        revalidatePath("/");

    } catch (error) {
        console.log("Server Action error ::::: ", error);
        return new Error(error);
    }
 }