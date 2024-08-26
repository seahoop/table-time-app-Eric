import dotenv from "dotenv"
dotenv.config()
import db from "./db/connection.js";
import express from "express"
const app = express()
import chalk from "chalk";
import cors from "cors"
import restControllers from "./controllers/restaurant.js"

const PORT = 3000


app.use("/restaurants", restControllers)

db.on("connected", () => {
    console.clear();
    console.log(chalk.blue("Connected to MongoDB!"));
  
    app.listen(PORT, () => {
      console.log(`Express server running on port: ${PORT}`);
    });
  }) 