'use server'
import { GetPharmacyOnDutyParams, GetPharmacyOnDutyResponse } from "@/services/pharmacy-on-duty/types";
import axios from "axios";

const endpoints = {
    pharmacyOnDuty: "/dutyPharmacy"
}

const API_KEY = process.env.ECZANE_API_KEY;

const pharmacyOnDutyService = axios.create({
    baseURL: "https://api.collectapi.com/health",
    fetchOptions: {
        cache: "force-cache"
    },
    headers: {
        "authorization": `apikey ${API_KEY}`
    }
})

export const getPharmacyOnDutyAction = async (params: GetPharmacyOnDutyParams): Promise<GetPharmacyOnDutyResponse | null> => {
    try {
        const pharmacies = await pharmacyOnDutyService.get(endpoints.pharmacyOnDuty, {
            params: params,

        });
        return pharmacies.data;
    } catch (error) {
        console.error("ERROR", JSON.stringify(error, null, 2));
        return null;
    }
}