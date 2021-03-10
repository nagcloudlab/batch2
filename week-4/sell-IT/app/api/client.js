import { create } from "apisauce";

const apiClient = create({
    baseURL: "http://192.168.43.28:3000/api",
});

export default apiClient;