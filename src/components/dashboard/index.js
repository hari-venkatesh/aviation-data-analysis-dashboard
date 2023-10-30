"use client";

import Card from "../card";
import { FaUsers } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import YearlyAnalyticsChart from "../cancellationChart";
import PassengerAnalytics from "../passengerChart"

export default function DashboardLayout({ allAirlines, allAirports }) {
  console.log(allAirlines, allAirports);
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
        <Card
          icon={<FaUsers size={25} />}
          data={
            allAirlines && allAirlines.length
              ? allAirlines.reduce(
                  (acc, passengerItem) =>
                    parseInt(
                      acc +
                        passengerItem.businessClass +
                        passengerItem.economyClass
                    ),
                  0
                )
              : 0
          }
          label={"Total Passengers"}
        />
        <Card
          data={allAirports && allAirports.length}
          icon={<MdOutlineProductionQuantityLimits size={25} />}
          label={"Total Airports"}
        />
        <Card
          data={
            allAirports && allAirports.length
              ? allAirports.reduce(
                  (acc, airlinesItem) =>
                    parseInt(acc + airlinesItem.noOfAircrafts),
                  0
                )
              : 0
          }
          icon={<MdOutlineProductionQuantityLimits size={25} />}
          label={"Total Aircrafts"}
        />
        <Card
          data={allAirlines && allAirlines.length}
          icon={<MdOutlineProductionQuantityLimits size={25} />}
          label={"Total Airlines"}
        />
      </div>
      <div className="mt-44 grid-cols-12 grid gap-4 md:mt-6 md:gap-6 2xl:mt-7 2xl:gap-7">
        <YearlyAnalyticsChart
          allAirports={
            allAirports && allAirports.length
              ? allAirports.map((productItem) => ({
                  ...productItem,
                }))
              : []
          }
        />
        <PassengerAnalytics
          allAirlines={allAirlines && allAirlines.length ? allAirlines : []}
        />
      </div>
    </div>
  );
}
