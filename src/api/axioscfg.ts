import axios from "axios";

const platformApi = axios.create({
    withCredentials: true,
    baseURL: "http://192.168.0.18:3000",
    headers: {
        "Content-Type": "application/json",
    },
});

export default platformApi