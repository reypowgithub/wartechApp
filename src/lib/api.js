import axios from "axios";

const api = axios.create({
  baseURL: "https://bhgkx5m5-3000.asse.devtunnels.ms/api",
});

// 👇 Response Interceptor
api.interceptors.response.use(
  (response) => {
    // Let successful responses pass through
    return response;
  },
  (error) => {
    if (error.response) {
      // ✅ Server responded with status other than 2xx
      const message = error.response.data?.message || "Something went wrong";
      console.error("API Error:", message);
      // You can also throw a custom error object if you want to catch only known errors
      throw new Error(message);
    } else if (error.request) {
      // ❌ No response received (likely network error)
      console.error("Network Error: No response from server");
      throw new Error("No internet connection or server is unreachable.");
    } else {
      // 🔺 Other errors
      console.error("Unexpected Error:", error.message);
      throw new Error("Unexpected error occurred");
    }
  }
);

export default api;
