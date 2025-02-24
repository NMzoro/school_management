import axios from "axios";

export const customApi = axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL,
    withCredentials:true,
})
export default customApi