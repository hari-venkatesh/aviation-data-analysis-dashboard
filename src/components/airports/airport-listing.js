import { monthsMapper, airportTableHeaders } from "@/utils/config";
import Table from "../table";

async function extractAllAirports() {
  const res = await fetch("http://localhost:3000/api/airports/all-airports", {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  return data;
}

export default async function AirportListing() {
  const allAirports = await extractAllAirports();

  console.log(allAirports);

  return (
    <Table
      tableHeaderText="All Airports Overview"
      tableHeaderCells={airportTableHeaders}
      data={
        allAirports && allAirports.data && allAirports.data.length
          ? allAirports.data.map((item) => ({
              ...item,
              revenue: parseInt(item.price * item.sales),
              month: monthsMapper[item.month],
            }))
          : []
      }
    />
  );
}