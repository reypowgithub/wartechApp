import axios from "axios";

const api = axios.create({
    baseURL: "https://gdwcknhx-3000.asse.devtunnels.ms/api",
});

export default api;