"use client"

import { getPharmacyOnDuty } from "@/services/pharmacy-on-duty/service";
import { HomeForm } from "./form";
import { PharmacyList } from "./pharmacy";
import { PharmacyOnDuty } from "@/services/pharmacy-on-duty/types";
import { Province } from "@/services/provinces/types";
import { useState } from "react";
import { Title } from "./title";
import { Loader2 } from "lucide-react";

export const Home = ({ provinces }: { provinces: Province[] }) => {

    const [pharmacies, setPharmacies] = useState<PharmacyOnDuty[]>([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (data: { province: string, district: string }) => {
        setLoading(true);
        const response = await getPharmacyOnDuty({
            ilce: data.district,
            il: data.province
        });
        if (response) {
            setPharmacies(response.result);
        }
        setLoading(false);
    }


    return (
        <div className="max-w-7xl mx-auto">
            <Title />
            <HomeForm provinces={provinces} handleSubmit={handleSubmit} />
            <div className="h-4"></div>
            {!loading && <PharmacyList pharmacies={pharmacies} />}
            {loading && <div className="flex  p-4 items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin bg-red-500 text-white rounded-full p-1" />
                <p className="text-sm text-slate-500 dark:text-slate-400">Eczane listesi yükleniyor...</p>
            </div>}
        </div>
    )
} 