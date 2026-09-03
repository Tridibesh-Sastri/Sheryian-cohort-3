import axios from "axios";

// axios.create is used to create a new instance of axios with a custom configuration. In this case, we are setting the base URL for all requests made using this instance to "https://dummyjson.com". Additionally, we are enabling the withCredentials option, which allows us to send cookies along with our requests. This is useful for authentication and maintaining sessions across different requests.

export const api = axios.create({
    baseURL: "https://dummyjson.com", // wehn we call api we will use this base url
    withCredentials: true,  // this will allow us to send cookies with requests
})