import dotenv from "dotenv"
import mongoose from 'mongoose';
dotenv.config()
import db from "./db/connection.js";
import express from "express"
const app = express()
import chalk from "chalk";
import cors from "cors"

// customerRouter below
import customerRouter from "./routes/customer.js"
import authRouter from "./controllers/regularAuth.js"

// restaurantRouter below
import restRouter from "./routes/restaurant.js"
import Restaurant from "./models/restaurant.js"

// adminRouter below
import adminAuthRouter from './controllers/adminAuth.js';  // Correct import
import adminProfileRouter from './controllers/adminProfile.js';
import adminPanel from './controllers/adminManagement.js';
import customerManagement from './controllers/adminManagement.js';
import restaurantManagement from './controllers/adminManagement.js';

const PORT = process.env.PORT || 3000
app.use(express.json());  // Middleware to parse JSON bodies
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/', async (req, res) => {
    const allRestaurants = await Restaurant.find({})
  res.json(allRestaurants)
})

// authorization middleware below
app.use('/auth', authRouter)

// customer middleware below
app.use("/customers", customerRouter)

// restaurant middleware below
app.use("/restaurants", restRouter)

// admin middleware below
app.use('/adminAuth', adminAuthRouter);  // Correctly register the route
app.use('/profiles', adminProfileRouter);
app.use('/panel', adminPanel );
app.use('/panel/customerManagement', customerManagement);
app.use('/panel/restaurantManagement', restaurantManagement);

db.on("connected", () => {
    console.clear();
    console.log(chalk.blue("Connected to MongoDB!"));
  
    app.listen(PORT, () => {
      console.log(`Express server running on port: ${PORT}`);
    });
  }) 
