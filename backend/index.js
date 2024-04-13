
// index.js

const express = require("express");
const mongoose = require("mongoose");
const eventRoutes = require("./routes");
const cors = require("cors");
const app = express();
const morgan=require("morgan")
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
const Razorpay = require("razorpay");
// Middleware
app.use(express.json());
// app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));
app.use(cors());
const razorpay = new Razorpay({
  key_id: "key_secret",
  key_secret: "1EWqm2NVGrHQiV0MUYGL50Qp",
});



// Connect to MongoDB Atlas
mongoose
  .connect(
    "mongodb+srv://adityakumar0718:harsh1234@cluster0.fecwzd4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err.message);
  });

// Routes
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: true,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`,
  });
});
app.use("/", eventRoutes);



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

