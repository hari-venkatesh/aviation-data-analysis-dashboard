"use client";

import { aircraftAnalyticsChartOptions } from "@/utils/config";
import ReactApexChart from "react-apexcharts";

function getAircraftByAirlines(data, getAircraft) {
  if (
    data &&
    data.length &&
    data.filter((item) => item.aircraftType === getAircraft).length === 0
  )
    return 0;

  return data && data.length
    ? data
        .filter((item) => item.aircraftType === getAircraft)
        .reduce((acc, obj) => acc + obj.economyClass + obj.businessClass, 0)
    : 0;
}

export default function AircraftAnalytics({ allAirlines }) {
  const series = [
    getAircraftByAirlines(allAirlines, "airbus"),
    getAircraftByAirlines(allAirlines, "boeing"),
    getAircraftByAirlines(allAirlines, "douglas"),
    getAircraftByAirlines(allAirlines, "lockheed"),
  ];

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-7 shadow sm:px-7.5 xl:col-span-5">
      <div className="flex w-full flex-col flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <p className="font-bold text-primary">Aviation Analysis By Aircrafts</p>
        <div className="w-full mb-2">
          <div
            id="aircraftAnalyticsChart"
            className="mx-auto flex justify-center"
          >
            <ReactApexChart
              options={aircraftAnalyticsChartOptions}
              series={series}
              type="donut"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
}