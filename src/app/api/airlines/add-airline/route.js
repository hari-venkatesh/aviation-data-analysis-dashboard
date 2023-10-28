import connectToDB from "@/database";
import Airline from "@/models/airlines";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();

    const extractData = await req.json();
    const newlyCreatedAirlineInfo = await Airline.create(extractData);

    if (newlyCreatedAirlineInfo) {
      return NextResponse.json({
        success: true,
        message: "Airline data added Successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to add a Airline ! Please try after some time.",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  }
}