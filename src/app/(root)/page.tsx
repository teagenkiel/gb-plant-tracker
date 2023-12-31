import { DataChartPanel } from "@/app/(root)/data-chart";
import { fetchDeviceData } from "@/db/actions/device-data.actions";
import { cookies } from "next/headers";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const deviceData = await fetchDeviceData();
  const cookies1 = cookies();

  const dataset = deviceData.filter((data) => data.deviceName === "1318250");

  return (
    <div className="grow">
      <DataChartPanel data={dataset} />
    </div>
  );
}
