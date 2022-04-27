import api from "../api";

type sendMessageProps = {
  message: string;
};

export const sendMessage = async (data: sendMessageProps) => {
  return api.post("/messages", data);
};

export const getMessage = async () => {
  return api.get("/messages");
};
