import { pushDeviceData } from "@/db/actions/device-data.actions";
import { rawDeviceDataSchema } from "@/types/types";
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
  const parsedData = rawDeviceDataSchema.parse(data);
  console.log(parsedData);
  const deviceName = parsedData.deviceId;
  const result = await pushDeviceData({
    deviceName: parsedData.deviceId,
    ...parsedData,
  });

  const deepSleepTime = 60e6 * 10; //10 minutes

  const response = { deepSleepTime, data };
  return NextResponse.json(response);
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}
