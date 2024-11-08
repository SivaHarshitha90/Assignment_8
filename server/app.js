// Import dependencies
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config;

// Initialize Express app
const app = express();

//enable cross origin site
// Allow only your frontend URL
const corsOptions = {
  origin: "http://localhost:5173", // Replace with your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  allowedHeaders: ["Content-Type"], // Allowed headers
};

app.use(cors(corsOptions)); // Use CORS with options

//url encoded for post requests
app.use(express.urlencoded({ extended: true }));

//json
app.use(express.json());

//connect mongodb
connectDB();

//routes
const userRoutes = require("./routes/User");
app.use("/user", userRoutes);

// Set the server to listen on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
