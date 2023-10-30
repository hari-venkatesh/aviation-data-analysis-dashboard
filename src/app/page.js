import DashboardLayout from "@/components/dashboard";

//get all airports data

async function extractAllAirports() {
  const res = await fetch("http://localhost:3000/api/airports/all-airports", {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  return data;
}

//get all airlines data

async function extractAllAirlines() {
  const res = await fetch("http://localhost:3000/api/airlines/all-airlines", {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  return data;
}

export default async function Home() {
  const allAirports = await extractAllAirports();
  const allAirlines = await extractAllAirlines();

  return (
    <DashboardLayout
      allAirports={allAirports && allAirports.data}
      allAirlines={allAirlines && allAirlines.data}
    />
  );
}
