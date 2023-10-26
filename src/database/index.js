import mongoose from "mongoose";

 const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://HariVenkateshP:Sarpata%406@cluster10.hvhcj0k.mongodb.net/"
    );
    console.log("Connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;