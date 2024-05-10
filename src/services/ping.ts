import { coinGeckoClient } from "@/clients/coinGeckoClient";

export const ping = async () => {
  try {
    const response = await coinGeckoClient.get("/ping");
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
