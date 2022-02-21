// Library imports
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

// Custom imports
const { errorHandler } = require("./middleware/errorHandlerMiddleware");
const connectDB = require("./config/db");

// Route imports
const taskRouter = require("./routes/tasks");
const userRouter = require("./routes/users");

const port = process.env.PORT || 5001;

// Connect to MongoDB Atlas.
connectDB();

const app = express();

app.use(cors("*"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/tasks", taskRouter);
app.use("/api/users", userRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
