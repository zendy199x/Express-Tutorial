const express = require("express");
const path = require("path");
const logger = require("./src/middleware/logger");
const members = require('./src/Members');
require("dotenv").config();

const app = express();

// Init middleware
app.use(logger);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Member API routers
app.use("/api/members", require("./src/routers/api/members"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
