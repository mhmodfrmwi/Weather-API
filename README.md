# Weather API with Redis Caching and Rate Limiting

## Overview

This is a Node.js and Express application that provides weather data for a specified city or country. It features Redis for caching API responses to improve performance and reduce unnecessary API calls. Additionally, rate limiting is implemented to protect the API from abuse.

## Features

- **Express.js**: Web framework for building the server.
- **Redis**: In-memory data structure store used for caching weather data.
- **Axios**: HTTP client used for making API requests to the weather service.
- **Rate Limiting**: Limits the number of requests per IP within a certain timeframe to prevent abuse.

## Prerequisites

Before running this project, ensure you have the following installed on your local machine:

- **Node.js**: v14.x or higher
- **Redis**: v6.x or higher
- **npm**: Node package manager

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mhmodfrmwi/Weather-API
   cd Weather-API
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```bash
   API_URL=your_weather_api_base_url
   API_KEY=your_weather_api_key
   PORT=3000 # Or your preferred port
   REDIS_PORT=6380 # Or your Redis port if different
   ```

4. **Start Redis Server:**

   Ensure Redis is running on your machine. If you installed Redis locally, you can start it with:

   ```bash
   redis-server
   ```

## Running the Project

To start the application, run:

```bash
npm start
```

The server will start on the port specified in your `.env` file (default is `3000`).

## API Endpoints

- **GET /weather?city=CityName**

  - Fetch weather data for a specific city.
  - Example: `GET /weather?city=Cairo`

- **GET /weather?country=CountryName**
  - Fetch weather data for a specific country.
  - Example: `GET /weather?country=Egypt`

### Response

The response includes the weather data in JSON format. Example:

```json
{
  "status": "success",
  "data": {
    // Weather data
  }
}
```

## Project Source

- **https://roadmap.sh/projects/weather-api-wrapper-service**
