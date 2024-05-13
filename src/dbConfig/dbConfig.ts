import mongoose, { connection } from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Database are connected successfylly!");
    });
    connection.on("error", (err) => {
      console.log(
        "Mongo db connection error, please check the connection properly" + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("You got some error in connecting the DB");
    console.log(error);
  }
}
