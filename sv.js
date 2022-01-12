const express = require("express");
require("dotenv").config({ path: "variables.env" });

const connectDB = require("./config/db");

const app = express(),
      port = process.env.PORT || "8000";

  connectDB();
  app
    .use(express.json())
    .use("/api/users", require("./routes/users"))
    .listen(port, "0.0.0.0", () => {
      console.log(`Server running in the port ${port}`);
    });
