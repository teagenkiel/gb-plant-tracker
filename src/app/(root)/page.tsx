import { fetchDeviceData } from "@/db/actions/device-data.actions";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const deviceData = await fetchDeviceData();
  console.log(deviceData);
  return (
    <div className="grow">
      <h1 className="text-white">Device Data</h1>
      <ul className="text-white">
        {deviceData.map((data, i) => (
          <li key={i}>
            <p>
              Name: {data.deviceName} Moisture Value: {data.moistureValue}{" "}
              Temperature Value: {data.temperatureValue}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
