import connectToDB from "@/database";
import Airport from "@/models/airports";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();
    const getAllAirports = await Airport.find({});

    if (getAllAirports) {
      return NextResponse.json({
        success: true,
        data: getAllAirports,
      });
    } else {
      return NextResponse.json({
        success: false,
        message:
          "Failed to fetch the Airports ! Please try again after some time",
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