import axios from "axios"
import { GetPharmacyOnDutyParams, GetPharmacyOnDutyResponse } from "./types"
import { getPharmacyOnDutyAction } from "@/app/actions/pharmacy-action";


export const getPharmacyOnDuty = async (params: GetPharmacyOnDutyParams): Promise<GetPharmacyOnDutyResponse | null> => {
    const getter = getPharmacyOnDutyAction.bind(null, params);
    const response = await getter() ?? null;
    return response;
} 