const express = require("express");
const db = require("./src/config/db");
const config = require("./src/config/config");
const cors = require("cors");

// Import routes
const authRoutes = require("./src/routes/authRoute");

//Import analyzeText Routes
const analyzeRoutes = require("./src/routes/analyzeRoute");

const waitlistRoutes = require("./src/routes/waitlistRoute");
const app = express();

app.use(cors({
  origin: [
    "https://detectorai.me",
    "http://detectorai.me",
    "http://localhost:3000"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


const port = config.PORT;
app.use(express.json());

// Connect to the database
db.connect();

app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/analyze", analyzeRoutes);

app.use("/api/v1/waitlist", waitlistRoutes);

app.use("/public", express.static("public"));


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
