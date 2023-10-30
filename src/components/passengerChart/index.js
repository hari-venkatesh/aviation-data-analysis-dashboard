"use client";

import { passengerAnalyticsChartOptions } from "@/utils/config";
import ReactApexChart from "react-apexcharts";

function getAllEconomy(data, airline) {
  if (data && data.length === 0) return 0;

  return data
    .filter((item) => item.name === airline)
    .reduce((acc, visitorItem) => acc + visitorItem.economyClass, 0);
}
function getAllBusiness(data, airline) {
  if (data && data.length === 0) return 0;

  return data
    .filter((item) => item.name === airline)
    .reduce((acc, visitorItem) => acc + visitorItem.businessClass, 0);
}

export default function PassengerAnalytics({ allAirlines }) {
  const uniqueAirline = [...new Set(allAirlines.map((item) => item.name))];
  console.log(uniqueAirline, "allAirlines");

  const maxUniqueAirlineToShow = uniqueAirline.slice(
    0,
    uniqueAirline && uniqueAirline.length > 4 ? 4 : uniqueAirline.length
  );

  let updatedOptions = {
    ...passengerAnalyticsChartOptions,
    xaxis: {
      categories: maxUniqueAirlineToShow,
    },
  };

  const series = [
    {
      name: "Economy Class",
      data: maxUniqueAirlineToShow.map((locationItem) =>
        getAllEconomy(allAirlines, locationItem)
      ),
    },
    {
      name: "Business Class",
      data: maxUniqueAirlineToShow.map((locationItem) =>
        getAllBusiness(allAirlines, locationItem)
      ),
    },
  ];

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-7 shadow sm:px-7.5 xl:col-span-4">
      <div className="flex w-full flex-col flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <p className="font-bold text-primary">Passengers by Class</p>
        <div className="w-full">
          <div id="YearlyAnalyticsChart" className="-ml-5">
            <ReactApexChart
              options={updatedOptions}
              series={series}
              type="area"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
