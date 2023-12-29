import { DeviceName } from "@/types/types";

export const deviceIdToName = (deviceId: String): DeviceName => {
  switch (deviceId) {
    case "1318372":
      return DeviceName.MICK;
    default:
      throw new Error(`Device ID ${deviceId} not found`);
  }
};
