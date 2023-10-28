import connectToDB from "@/database";
import Airport from "@/models/airports";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();

    const extractData = await req.json();
    const newlyCreatedAirport = await Airport.create(extractData);

    if (newlyCreatedAirport) {
      return NextResponse.json({
        success: true,
        message: "Airport added Successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to add a Airport ! Please try after some time.",
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