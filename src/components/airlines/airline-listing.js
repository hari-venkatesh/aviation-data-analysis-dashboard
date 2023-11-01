import { aircraftMapper, monthsMapper, airlinesTableHeaders } from "@/utils/config";
import Table from "../table";

async function extractAllAirlines() {
  const apiUrl = process.env.API_URL
  const res = await fetch(`${apiUrl}/api/airlines/all-airlines`, {
    method: "GET",
    cache: "no-store",
  });
  
  const data = await res.json();

  return data;
}

export default async function AirlinesList() {
  const allAirlines = await extractAllAirlines();
  return (
    <Table
      tableHeaderText="All Airlines Overview"
      tableHeaderCells={airlinesTableHeaders}
      data={
        allAirlines && allAirlines.data && allAirlines.data.length
          ? allAirlines.data.map(item=> ({
            ...item,
            month : monthsMapper[item.month],
            aircraftType : aircraftMapper[item.aircraftType]
          }))
          : []
      }
    />
  );
}