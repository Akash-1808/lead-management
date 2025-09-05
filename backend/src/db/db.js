import mongoose from "mongoose";
import leadSchema from "./schema/schema.js";
import "dotenv/config.js"

if (!process.env.MONGO_URL) {
    throw new Error("MONGO_URI is not defined");
}

mongoose.connect(process.env.MONGO_URL);

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;
