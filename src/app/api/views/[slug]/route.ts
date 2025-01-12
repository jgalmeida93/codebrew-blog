import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function POST(
  request: Request,
  context: { params: { slug: string } }
) {
  const params = await context.params;
  const slug = params.slug;
  const views = await redis.incr(`post:${slug}:views`);
  return NextResponse.json({ views });
}

export async function GET(
  request: Request,
  context: { params: { slug: string } }
) {
  const params = await context.params;
  const slug = params.slug;
  const views = (await redis.get(`post:${slug}:views`)) || 0;
  return NextResponse.json({ views });
}
