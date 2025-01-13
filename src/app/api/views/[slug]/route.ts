import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function POST(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/").pop();
  if (!slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 });
  }

  const views = await redis.incr(`post:${slug}:views`);
  return NextResponse.json({ views });
}

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/").pop();
  if (!slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 });
  }

  const views = (await redis.get(`post:${slug}:views`)) || 0;
  return NextResponse.json({ views });
}
