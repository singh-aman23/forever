import { connectMongoDB } from "@/lib/mongodb";
import Letter from "@/models/letter";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        await connectMongoDB();
        const {id} = await req.json();
        const letter = await Letter.findById(id);
        return NextResponse.json({letter});
    } catch (error) {
        return NextResponse.json({error : "Internal Server Error"}, {status : 500});
    }
}