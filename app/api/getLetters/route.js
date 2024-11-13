import { connectMongoDB } from "@/lib/mongodb";
import Letter from "@/models/letter";
import { NextResponse } from "next/server";

export async function POST(){
    try {
        await connectMongoDB();
        const posts = await Letter.find();
        return NextResponse.json({posts}, {status : 200});
    } catch (error) {
        return NextResponse.json({error: "Failed to fetch posts"}, {status: 500});
    }
}