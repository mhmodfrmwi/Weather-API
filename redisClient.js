// redisClient.js
const redis = require("redis");

const client = redis.createClient({
  port: 6380,
});

client.on("error", (err) => {
  console.error("Redis Client Error", err);
});

client
  .connect()
  .then(() => {
    console.log("Redis client connected");
  })
  .catch((err) => {
    console.error("Redis client connection failed", err);
  });

module.exports = client;
