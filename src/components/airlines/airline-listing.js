import { deviceMapper, monthsMapper, visitorsTableHeaders } from "@/utils/config";
import Table from "../table";

async function extractAllAirlines() {
  const res = await fetch("http://localhost:3000/api/airlines/all-airlines", {
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
            device : deviceMapper[item.device]
          }))
          : []
      }
    />
  );
}