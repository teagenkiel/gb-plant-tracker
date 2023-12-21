import { fetchDeviceData } from "@/db/actions/device-data.actions";

export default async function Home() {
  const deviceData = await fetchDeviceData();
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