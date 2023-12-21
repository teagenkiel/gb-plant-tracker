import { pushDeviceData } from "@/db/actions/device-data.actions";
import { deviceDataSchema } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const requestUrl = request.url;

  return NextResponse.json({
    message: "Hello from the API - ready for device data",
    request: requestUrl,
  });
}

export async function HEAD(request: Request) {}

export async function POST(request: NextRequest) {
  const data = await request.json();
  console.log(data);
  const parsedData = deviceDataSchema.parse(data);
  console.log(parsedData);
  const result = await pushDeviceData(parsedData);
  return NextResponse.json({ data });
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}
