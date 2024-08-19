import mongoose from "mongoose";
const connectDB = async () => {
  const password = "pritish29";
  try {
    const connect = await mongoose.connect(
      `mongodb+srv://admin:${password}@cluster0.su4afjd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01`,
      {}
    );
    console.log(`mongodb connected: ${connect.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
