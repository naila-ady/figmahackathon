

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const serviceablePins = ['110001', '110002', '110003']; // Example pin codes

  // Returning the JSON response
  return NextResponse.json(serviceablePins);
}
