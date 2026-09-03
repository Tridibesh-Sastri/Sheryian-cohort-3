import { api } from "../../../config/api";

console.log("authApi.jsx file rendering....");

export const loginUserApi = async (credentials) => {
  try {
    const response = await api.post("/auth/login", credentials);
    console.log("Showing from authApi - Login API Response:", response.data);
    return response.data; // Return the response data for further processing if needed
  } catch (error) {
    console.error("Error occurred while logging in:", error);
    throw error;
  }
};

export const hydrateUserApi = async () => {
  
  let access_token = JSON.parse(localStorage.getItem("accessToken"));
  console.log("Access Token:", access_token);

  try {
    const response = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${access_token}`, // Pass JWT via Authorization header
      },
    });
    console.log(
      "Showing from authApi - Hydrate User API Response:",
      response.data,
    );
    return response.data; // Return the response data for further processing if needed
  } catch (error) {
    console.error("Error occurred while logging in:", error);
    throw error;
  }
};
