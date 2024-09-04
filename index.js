const express = require("express");
const dotenv = require("dotenv");
const rateLimit = require("express-rate-limit");
dotenv.config();
const app = express();

const Cache = require("./middleware/cacheToRedis");

const getFromApi = require("./middleware/getFromApi");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: "Too many requests, please try again later.",
});

app.get("/weather", limiter, Cache, getFromApi);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
