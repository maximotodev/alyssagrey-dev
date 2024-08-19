import { NextResponse } from "next/server";


export async function GET(request: Request) {
    const ASSET_ID  = `O3mYxcjukfp00Fyq1ZMCtnr9UOCIh7jiAUhGhFKKJHLI`
    const MUX_TOKEN_ID = process.env.MUX_TOKEN_ID; // Set your MUX Token ID in .env.local
    const MUX_TOKEN_SECRET = process.env.MUX_TOKEN_SECRET; // Set your MUX Token Secret in .env.local
  
    if (!ASSET_ID) {
      return NextResponse.json({
        status: 400, error: 'Asset ID is required' });
    }
  
    const url = `https://api.mux.com/video/v1/assets/${ASSET_ID}`;
  
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${Buffer.from(`${MUX_TOKEN_ID}:${MUX_TOKEN_SECRET}`).toString('base64')}`
        }
      });
  
      if (!response.ok) {
        return NextResponse.json({ 
            error: 'Failed to fetch asset', status: (response.status) }
            );
      }
      const { data } = await response.json();
      return NextResponse.json({ data, status: 200})
    } catch (error) {
      return NextResponse.json({ 
        error: 'Internal server error',
        status: 500 });
    }
  }
  