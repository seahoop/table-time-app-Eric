import dotenv from "dotenv"
dotenv.config()
import db from "./db/connection.js";
import express from "express"
const app = express()
import chalk from "chalk";
import cors from "cors"

// customerRouter below
import customerRouter from "./controllers/customer.js"

// restaurantRouter below


// adminRouter below


const PORT = 3000

// customer middleware below
app.use("/customers", customerRouter)

// restaurant middleware below


// admin middleware below


db.on("connected", () => {
    console.clear();
    console.log(chalk.blue("Connected to MongoDB!"));
  
    app.listen(PORT, () => {
      console.log(`Express server running on port: ${PORT}`);
    });
  }) 