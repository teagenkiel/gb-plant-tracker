"use server";
import DeviceDataModel from "@/db/models/device-data";
import { connectToDB } from "@/db/mongoose";
import { DeviceData } from "@/types/types";
import { randomUUID } from "crypto";

export const pushDeviceData = async (input: {
  deviceName: String;
  moistureValue: Number;
}) => {
  const { deviceName, moistureValue } = input;
  try {
    connectToDB();

    const createdDeviceData = await DeviceDataModel.create({
      id: randomUUID(),
      deviceName,
      moistureValue,
      createdAt: new Date(),
    });
  } catch (error: any) {
    throw new Error(`Failed to push device data: ${error.message}`);
  }
};

export const fetchDeviceData = async (): Promise<DeviceData[]> => {
  connectToDB();

  const deviceData = await DeviceDataModel.find();
  return deviceData;
};
