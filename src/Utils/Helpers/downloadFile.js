import axiosMainClient from "../../Configs/Axios";

const downloadFile = async (baseURL, url, axiosConfig) => {
  return axiosMainClient(baseURL, 900000)
    .get(url, {
      responseType: "blob",
      ...axiosConfig,
    })
    .then((response) => {
      return response.data;
    });
};

export default downloadFile;
