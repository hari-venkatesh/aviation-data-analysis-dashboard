"use client";

import { yearlyAnalyticsChartOptions } from "@/utils/config";
import ReactApexChart from "react-apexcharts";

const monthsArray = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

function getAirportsCancel(flights, getMonth) {
  if (flights.filter((item) => item.month === getMonth).length === 0) return 0;

  return flights
    .filter((item) => item.month === getMonth)
    .reduce((acc, productItem) => acc + productItem.noOfFlightCancelledByAirport, 0);
}

function getAirlinesCancel(flights, getMonth) {
  if (flights.filter((item) => item.month === getMonth).length === 0) return 0;

  return flights
    .filter((item) => item.month === getMonth)
    .reduce((acc, productItem) => acc + productItem.noOfFlightCancelledByAirlines, 0);
}

function getTotalFlights(flights, getMonth) {
  if (flights.filter((item) => item.month === getMonth).length === 0) return 0;

  return flights
    .filter((item) => item.month === getMonth)
    .reduce((acc, productItem) => acc + productItem.noOfAircrafts, 0);
}

export default function YearlyAnalyticsChart({ allAirports }) {
  console.log(allAirports);
  const series = [
    {
      name: "Cancelled By Airport",
      data: monthsArray.map((item) => getAirportsCancel(allAirports, item)),
    },
    {
      name: "Cancelled By Airline",
      data: monthsArray.map((item) => getAirlinesCancel(allAirports, item)),
    },
    {
      name: "Total Flights",
      data: monthsArray.map((item) => getTotalFlights(allAirports, item)),
    },
  ];

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-7 shadow sm:px-7.5 xl:col-span-8">
      <div className="flex w-full flex-col flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <p className="font-bold text-primary">Yearly Cancellation Overview</p>
        <div className="w-full">
          <div id="YearlyAnalyticsChart" className="-ml-5">
            <ReactApexChart
              options={yearlyAnalyticsChartOptions}
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