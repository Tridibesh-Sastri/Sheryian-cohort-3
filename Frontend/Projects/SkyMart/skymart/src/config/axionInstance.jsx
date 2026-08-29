// Not a component that's why we are choose first letter of the file to be in small letter PascalCase. This file is used to create a single instance of axios and export it to be used in other files.
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com",
})

axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("Response from API: ", response);
        return response;
    },
    ()=>{
        console.log("Error in API call: ", error);
    }
)