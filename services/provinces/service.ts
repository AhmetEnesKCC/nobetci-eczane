import axios from "axios";
import { GetProvincesResponse } from "./types";

const endpoints = {
    provinces: "/provinces"
}

const provincesService = axios.create({
    baseURL: "https://api.turkiyeapi.dev/v1",
    fetchOptions: {
        cache: "force-cache"
    }
})

export const getProvinces = async (): Promise<GetProvincesResponse | null> => {
    try {

        const response = await provincesService.get<GetProvincesResponse>(endpoints.provinces);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
