import { getArtist } from "@/lib/spotify";
import { unstable_noStore } from "next/cache";
import { NextResponse } from "next/server";


// Handles GET requests to /api/
export async function GET(request: Request) {
  unstable_noStore()
  const response = await getArtist();
  const data = await response.json()
  return NextResponse.json( data , { status: 200 });
}

// Handles POST requests to /api
export async function POST(request: Request) {
  // ...
  return NextResponse.json({ message: "Hello World" });
}
