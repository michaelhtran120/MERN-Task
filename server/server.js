const express = require("express");
const taskRouter = require("./routes/tasks");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.use("/api/tasks", taskRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
