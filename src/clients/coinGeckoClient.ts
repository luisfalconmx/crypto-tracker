import axios from "axios";

export const coinGeckoClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    "x-cg-demo-api-key": process.env.NEXT_PUBLIC_API_KEY,
  },
});
