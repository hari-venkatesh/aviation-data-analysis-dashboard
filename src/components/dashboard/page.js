"use client";

import Card from "../card";
import { FaUsers } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BsFillPersonCheckFill } from "react-icons/bs";

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
                    parseInt(acc + passengerItem.businessClass),
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
          data={allAirlines && allAirlines.length}
          icon={<MdOutlineProductionQuantityLimits size={25} />}
          label={"Total Airlines"}
        />
        <Card
          data={
            allAirports && allAirports.length
              ? allAirports.reduce(
                  (acc, cancelledItem) => parseInt(acc + cancelledItem.noOfFlightCancelledByAirport),
                  0
                )
              : 0
          }
          label={"Total Cancelled Flights"}
          icon={<BsFillPersonCheckFill size={25} />}
        />
      </div>
    </div>
  );
}