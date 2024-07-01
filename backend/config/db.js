import mongoose from "mongoose";

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
 
  } catch (error) {
    console.log("Error in connecting in database");
  }
}

export default connectDb;
