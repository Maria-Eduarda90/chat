import api from "../api";

type sendMessageProps = {
  message: string;
};

export const sendMessage = (data: sendMessageProps) => {
  return api.post("/messages", data);
};

export const getMessage = () => {
  return api.get("/messages");
};
