// Library imports
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const path = require("path");

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

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../", "client", "index", "html"));
  });
}

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
