import axios from "axios";

// Axios instance create pannunga
const Api = axios.create({
  baseURL: "https://rewardify.dotcod.in/api/v1/store-user",
});

// **Access Token Request-ku Header Add Pannunga**
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("authToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// **401 Error Handle Pannitu Refresh Token Call Automate Pannunga**
api.interceptors.response.use(
  (response) => response, // Success Response
  async (error) => {
    if (error.response?.status === 401) {
      // **Access Token Expired! Refresh Token Call Pannunga**
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        try {
          // Refresh Token API Call
          const refreshResponse = await axios.post(
            "https://rewardify.dotcod.in/api/v1/store-user/auth/refreshToken/",
            {},
            {
              headers: {
                Authorization: `Bearer ${refreshToken}`,
              },
            }
          );

          const { authToken } = refreshResponse.data;

          // Pudhu Access Token Store Pannunga
          localStorage.setItem("authToken", authToken);

          // Original Request Retry Pannunga
          error.config.headers.Authorization = `Bearer ${authToken}`;
          return Api.request(error.config);
        } catch (refreshError) {
          console.error("Refresh Token Expired or Invalid. Redirect to Login.");
          localStorage.clear(); // Tokens clear pannunga
          window.location.href = "/login"; // Redirect to Login
        }
      } else {
        console.error("No Refresh Token Found. Redirect to Login.");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default Api;