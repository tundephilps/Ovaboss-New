import axios, { AxiosInstance } from "axios";

const axiosClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 10000, // 10 seconds
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a request interceptor if needed (e.g., for auth token)
axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("authToken");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }

        config.headers["x-api-key"] = "06052025";

        return config;
    },
    (error) => Promise.reject(error)
);

// Optional: Add a response interceptor
axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log("response", error.response?.data)
        // Handle common errors globally (e.g., 401, 403)
        if (error.response?.status === 401) {
            console.warn("Unauthorized. Redirecting to login...");
            // Optionally redirect or logout
            const currentPath = location.pathname.toLowerCase();

            if (currentPath !== '/signin' && currentPath !== '/verifyemail') {
                // location.href = '/Signin';
            }
        }
        return Promise.reject(new Error(error.response?.data?.message ?? error.message));
    }
);

export default axiosClient;
