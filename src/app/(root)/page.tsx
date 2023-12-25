import { fetchDeviceData } from "@/db/actions/device-data.actions";
import { cookies } from "next/headers";

export default async function Home() {
  const cookies2 = cookies();
  const deviceData = await fetchDeviceData();
  console.log("deviceData: ", deviceData);
  console.log("MONGODB_URI: ", process.env.MONGODB_URI);

  return (
    <div className="grow">
      <h1 className="text-white">Device Data</h1>
      <ul className="text-white">
        {deviceData.map((data, i) => (
          <li key={i}>
            <p>
              Name: {data.deviceName} Value: {data.moistureValue}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
