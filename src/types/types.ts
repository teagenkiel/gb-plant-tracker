import z from "zod";

export const DeviceName = {
  TEST: "TEST",
  MICK: "MICK",
  PETE: "PETE",
} as const;

export type DeviceName = (typeof DeviceName)[keyof typeof DeviceName];

export const rawDeviceDataSchema = z.object({
  deviceId: z.string(),
  moistureValue: z.number(),
  temperatureValue: z.number(),
});

export type RawDeviceData = z.infer<typeof rawDeviceDataSchema>;

export const deviceDataInputSchema = z.object({ data: rawDeviceDataSchema });

export const deviceDataUnsavedSchema = z.object({
  deviceName: z.string(),
  moistureValue: z.number(),
  temperatureValue: z.number(),
});

export type DeviceDataUnsaved = z.infer<typeof deviceDataUnsavedSchema>;

export const deviceDataSchema = z.object({
  id: z.string(),
  deviceName: z.string(),
  moistureValue: z.number(),
  temperatureValue: z.number(),
  createdAt: z.date(),
});

export type DeviceData = z.infer<typeof deviceDataSchema>;
