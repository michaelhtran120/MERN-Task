const express = require("express");
const { errorHandler } = require("./middleware/errorHandlerMiddleware");
const taskRouter = require("./routes/tasks");
const connectDB = require("./config/db");
const userRouter = require("./routes/users");
const dotenv = require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT || 5001;

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
