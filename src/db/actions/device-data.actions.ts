"use server";
import DeviceDataModel from "@/db/models/device-data";
import { connectToDB } from "@/db/mongoose";
import { DeviceData } from "@/types/types";
import { randomUUID } from "crypto";

export const pushDeviceData = async (input: DeviceData) => {
  const { deviceName, moistureValue, temperatureValue } = input;
  try {
    await connectToDB();

    const createdDeviceData = await DeviceDataModel.create({
      id: randomUUID(),
      deviceName,
      moistureValue,
      temperatureValue,
      createdAt: new Date(),
    });
  } catch (error: any) {
    throw new Error(`Failed to push device data: ${error.message}`);
  }
};

export const fetchDeviceData = async (): Promise<DeviceData[]> => {
  await connectToDB();

  console.log("Fetching device data");

  const deviceData = await DeviceDataModel.find();

  console.log("Device data found: ", deviceData);

  return deviceData;
};
