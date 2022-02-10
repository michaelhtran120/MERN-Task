const express = require("express");
const { errorHandler } = require("./middleware/errorHandlerMiddleware");
const taskRouter = require("./routes/tasks");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5001;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/tasks", taskRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
