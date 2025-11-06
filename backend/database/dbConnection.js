import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "MERN_STACK_EVENT_MESSSAGE" })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.error("Error occurred while connecting to the database:", err);
    });
};




