"use server";
import { fetchDeviceData } from "@/db/actions/device-data.actions";
import { cookies } from "next/headers";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const cookies1 = cookies();
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

// This function gets called at build time
// export async function getStaticPaths() {
//   return {
//     // Only `/posts/1` and `/posts/2` are generated at build time
//     // Enable statically generating additional pages
//     // For example: `/posts/3`
//     fallback: true,
//   };
// }
