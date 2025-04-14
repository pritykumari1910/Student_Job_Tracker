const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const jobRoutes = require("./routes/jobRoutes");
const errorHandler = require("./middleware/errorMiddleware");

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/jobs", jobRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
