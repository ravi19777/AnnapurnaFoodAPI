import mongoose from "mongoose";
import HomePage from "./HomePage"; // Adjust the path as necessary

const SchemaFunction = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb://127.0.0.1:27017/AnnpurnaFood", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(`Page break due to ${error}`);
  }
};

export default SchemaFunction;
export { HomePage };
