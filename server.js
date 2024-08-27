import dotenv from "dotenv"
dotenv.config()
import db from "./db/connection.js";
import express from "express"
const app = express()
import chalk from "chalk";
import cors from "cors"

// customerRouter below
import customerRouter from "./controllers/customer.js"
import authRouter from "./controllers/regularAuth.js"

// restaurantRouter below
import restRouter from "./controllers/restaurant.js"

// adminRouter below
import adminAuthRouter from './controllers/adminAuth.js';  // Correct import
import adminProfileRouter from './controllers/adminProfile.js'

const PORT = 3000
app.use(cors());
app.use(express.json());  // Middleware to parse JSON bodies

// authorization middleware below
app.use('/auth', authRouter)

// customer middleware below
app.use("/customers", customerRouter)

// restaurant middleware below
app.use("/restaurants", restRouter)

// admin middleware below
app.use('/adminAuth', adminAuthRouter);  // Correctly register the route
app.use('/profiles', adminProfileRouter)

db.on("connected", () => {
    console.clear();
    console.log(chalk.blue("Connected to MongoDB!"));
  
    app.listen(PORT, () => {
      console.log(`Express server running on port: ${PORT}`);
    });
  }) 