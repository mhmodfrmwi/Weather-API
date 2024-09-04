// cacheToRedis.js
const client = require("../redisClient"); // Use the shared Redis client

const Cache = async (req, res, next) => {
  const areaName = req.query["city"] || req.query["country"];
  if (!client.isOpen) {
    return res.status(500).json({
      status: "error",
      message: "Redis client is not connected",
    });
  }

  try {
    const data = await client.get(areaName);
    if (data !== null) {
      return res.status(200).json({
        status: "success",
        data: JSON.parse(data),
      });
    } else {
      next();
    }
  } catch (err) {
    console.error("Redis GET Error", err);
    return res.status(500).json({ status: "error", message: "Redis error" });
  }
};
module.exports = Cache;
