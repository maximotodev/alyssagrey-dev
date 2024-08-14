import { getTopTracks } from "@/lib/spotify";
import { unstable_noStore } from "next/cache";
import { NextResponse } from "next/server";

// Handles GET requests to /api/tracks
export async function GET(request: Request) {
unstable_noStore()
  const response = await getTopTracks();
  const { tracks } = await response.json();
  return NextResponse.json( tracks , { 
    status: 200,
  });
}