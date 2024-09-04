// getFromApi.js
const axios = require("axios");
const client = require("../redisClient"); // Use the shared Redis client

const getFromApi = async (req, res) => {
  const areaName = req.query["city"] || req.query["country"];

  try {
    const response = await axios.get(
      `${process.env.API_URL}key=${process.env.API_KEY}&q=${areaName}`
    );
    const data = response.data;

    await client.set(areaName, JSON.stringify(data), {
      EX: 60000,
    });

    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch data from API",
    });
  }
};

module.exports = getFromApi;
