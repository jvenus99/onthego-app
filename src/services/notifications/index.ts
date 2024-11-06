import api from "@/libs/api";

export type Notification = {
  comments: number;
  read: boolean;
  mensage: string;
  id: string;
  createAt: string;
};

export const getNotifications = async (): Promise<Array<Notification>> => {
  try {
    const response = await api.get("/notifications");
    return response.data;
  } catch (error) {
    console.error("Error fetching example data", error);
    throw error;
  }
};
