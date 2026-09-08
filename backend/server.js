const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db")

dotenv.config();
connectDB();

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) =>{
    res.json({
        success: true,
        message: "Murugan Store API is running",
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{console.log(`Server running on http://localhost:${PORT}`);
});