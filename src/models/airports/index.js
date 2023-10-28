import mongoose from "mongoose";

const AirportSchema = new mongoose.Schema({
  name: String,
  noOfAirlines: Number,
  noOfAircrafts: Number,
  noOfFlightCancelledByAirport: Number,
  noOfFlightCancelledByAirlines: Number,
  month: String,
}, {timestamps : true});

const Airport =
  mongoose.models.Airports || mongoose.model("Airports", AirportSchema);

export default Airport;