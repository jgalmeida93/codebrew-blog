import { kv } from "@vercel/kv";

export async function incrementViews(slug: string): Promise<number> {
  const views = await kv.incr(`views:${slug}`);
  return views;
}

export async function getViews(slug: string): Promise<number> {
  const views = (await kv.get<number>(`views:${slug}`)) ?? 0;
  return views;
}
