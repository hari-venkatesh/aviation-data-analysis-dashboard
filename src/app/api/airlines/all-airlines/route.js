import connectToDB from "@/database";
import Airline from "@/models/airlines";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();
    const getAllAirlinesInfo = await Airline.find({});

    if (getAllAirlinesInfo) {
      return NextResponse.json({
        success: true,
        data: getAllAirlinesInfo,
      });
    } else {
      return NextResponse.json({
        success: false,
        message:
          "Failed to fetch the Airlines ! Please try again after some time",
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