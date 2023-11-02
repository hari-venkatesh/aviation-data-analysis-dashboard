import DashboardLayout from "@/components/dashboard";

//get all airports data

async function extractAllAirports() {

  const apiUrl = process.env.API_URL
  
  const res = await fetch(`${apiUrl}/api/airports/all-airports`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  return data;
}

//get all airlines data

async function extractAllAirlines() {

  const apiUrl = process.env.API_URL

  const res = await fetch(`${apiUrl}/api/airlines/all-airlines`, {
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
    // <DashboardLayout
    //   allAirports={allAirports && allAirports.data}
    //   allAirlines={allAirlines && allAirlines.data}
    // />
    <div>Home</div>
  );
}
