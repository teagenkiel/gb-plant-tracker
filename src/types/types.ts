import z from "zod";

export const deviceDataSchema = z.object({
  deviceName: z.string(),
  moistureValue: z.number(),
});

export type DeviceData = z.infer<typeof deviceDataSchema>;

export const deviceDataInputSchema = z.object({ data: deviceDataSchema });
