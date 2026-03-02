import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, phone, email, messenger, message } = body;

  if (!name || !phone || !messenger) {
    return NextResponse.json({ error: "필수 항목을 입력해주세요." }, { status: 400 });
  }

  await db.inquiry.create({
    data: { name, phone, email: email || null, messenger, message: message || null },
  });

  return NextResponse.json({ success: true });
}
