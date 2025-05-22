import axios from "axios";

const api = axios.create({
    baseURL: "https://bhgkx5m5-3000.asse.devtunnels.ms/api",
});

export default api;