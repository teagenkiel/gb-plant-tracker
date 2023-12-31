import { DeviceName } from "@/types/types";

export const deviceIdToName = (deviceId: String): DeviceName => {
  switch (deviceId) {
    case "1318372":
      return "PLANT DADDY";
    case "1318250":
      return "MOISTURE MAMI";
    default:
      throw new Error(`Device ID ${deviceId} not found`);
  }
};
