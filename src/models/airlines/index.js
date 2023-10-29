import mongoose from "mongoose";

const AirlinesSchema = new mongoose.Schema(
  {
    name: String,
    economyClass: Number,
    businessClass: Number,
    aircraftType: String,
    origin: String,
    destination: String,
    month: String,
  },
  { timestamps: true }
);

const Airline =
  mongoose.models.Airlines || mongoose.model("Airlines", AirlinesSchema);

export default Airline;
