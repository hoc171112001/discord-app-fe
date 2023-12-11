import { NextRequest } from "next/server";
import { cookies } from 'next/headers'
export async function GET(req: NextRequest) {
  const langList = req.headers.get('accept-language')?.split(',') || ['en'];
  const lang = langList[0]
  cookies().set('language', lang)
  return new Response("<This is a language route>");
}

