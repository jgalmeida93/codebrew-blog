"use server";

import { cookies } from "next/headers";

const COOKIE_NAME = "NEXT_LOCALE";

export async function setCookie(
  name = COOKIE_NAME,
  value: string,
  options = {}
) {
  const cookieStore = cookies();
  (await cookieStore).set(name, value, options);
}
