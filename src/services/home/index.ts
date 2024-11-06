import api from "@/libs/api";
import { formatNumber } from "@/utils/number-format";

type Research = {
  name: string;
  id: number;
  status: string;
};

type Researches = {
  running: { current: number; total: number };
  scripting: number;
  myresearches: Research[];
};

type Audience = {
  balance: number;
  sended: number;
  contacts: number;
};

type Credits = {
  running: number;
  reserved: number;
  available: number;
};

export type HomeData = {
  researches: Researches;
  audience: Audience;
  credits: Credits;
  id: string;
  createAt: string;
};

export const getHomeData = async (): Promise<HomeData> => {
  try {
    const response = await api.get("/home/7a581b0e16b559ff9a9957");
    const data = response.data;

    if (data.researches && data.researches.running) {
      const [current, total] = data.researches.running.split("/").map(Number);
      data.researches.running = { current, total };
    }

    // Format numbers in the data object
    data.researches.scripting = formatNumber(data.researches.scripting);
    data.audience.balance = formatNumber(data.audience.balance);
    data.audience.sended = formatNumber(data.audience.sended);
    data.audience.contacts = formatNumber(data.audience.contacts);
    data.credits.running = formatNumber(data.credits.running);
    data.credits.reserved = formatNumber(data.credits.reserved);
    data.credits.available = formatNumber(data.credits.available);

    return data;
  } catch (error) {
    console.error("Error fetching home data", error);
    throw error;
  }
};
