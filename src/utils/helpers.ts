export const deviceIdToName = (deviceId: String): String => {
  switch (deviceId) {
    case "1318372":
      return "PLANT DADDY";
    case "1318250":
      return "MOISTURE MAMI";
    default:
      throw new Error(`Device ID ${deviceId} not found`);
  }
};
