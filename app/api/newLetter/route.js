import Letter from '@/models/letter'
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {date,greetings,content } = await req.json();
    await connectMongoDB();
    await Letter.create({ date,greetings,content });
    return NextResponse.json({ message: "letter registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "error occured", error },
      { status: 500 }
    );
  }
}
