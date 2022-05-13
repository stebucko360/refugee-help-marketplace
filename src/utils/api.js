import axios from "axios";

const mannaAPI = axios.create({
  baseURL: `https://43gbss3bg0.execute-api.eu-west-2.amazonaws.com/api`,
});

export const fetchAllItems = () => {
  return mannaAPI.get(`/products`).then((res) => {
    return res.data;
  });
};
