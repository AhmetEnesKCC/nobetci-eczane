"use client"

import Dropdown from "@/components/common/dropdown";
import { Button } from "@/components/ui/button";
import { Province } from "@/services/provinces/types";
import { SearchIcon } from "lucide-react";
import { useForm } from "react-hook-form"

export const HomeForm = ({ provinces, handleSubmit }: { provinces: Province[], handleSubmit: (data: { province: string, district: string }) => void }) => {

    const form = useForm<{ province: string, district: string }>({
        defaultValues: {
            province: "",
            district: ""
        }
    })

    const handleProvinceChange = (value: string) => {
        form.setValue("province", value);
    }

    const handleDistrictChange = (value: string) => {
        form.setValue("district", value);
    }

    const provincesOptions = provinces.map((province) => ({
        label: province.name,
        value: province.name
    }))

    const districtsOptions = provinces.find((province) => province.name.toString() === form.getValues("province"))?.districts.map((district) => ({
        label: district.name,
        value: district.name
    })) ?? []


    const { province, district } = form.watch();
    const districtDisabled = !province;

    return (
        <div className="flex flex-col md:flex-row items-end gap-4 p-6 transition-all duration-500
                bg-white/80 dark:bg-slate-900/40 
                border border-slate-200 dark:border-slate-800 
                backdrop-blur-md rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none">

            {/* İl Seçimi */}
            <div className="w-full space-y-2">
                <label className="text-[11px] font-bold tracking-[0.1em] ml-1 uppercase
                      text-slate-400 dark:text-slate-500">
                    Şehir Seçimi
                </label>
                <div className="relative group">
                    <Dropdown
                        options={provincesOptions}
                        value={form.getValues("province")}
                        onChange={handleProvinceChange}
                        placeholder="İl seçiniz..."
                        className="w-full h-12 transition-all duration-300
                   bg-slate-50 dark:bg-slate-950/50 
                   border-slate-200 dark:border-slate-800 
                   text-slate-900 dark:text-slate-100
                   rounded-2xl focus:ring-2 focus:ring-red-500/20"
                    />
                </div>
            </div>

            {/* İlçe Seçimi */}
            <div className="w-full space-y-2">
                <label className="text-[11px] font-bold tracking-[0.1em] ml-1 uppercase
                      text-slate-400 dark:text-slate-500">
                    Bölge / İlçe
                </label>
                <Dropdown
                    disabled={districtDisabled}
                    options={districtsOptions}
                    value={form.getValues("district")}
                    onChange={handleDistrictChange}
                    placeholder={districtDisabled ? "Önce il seçin" : "İlçe seçiniz..."}
                    className={`w-full h-12 transition-all duration-300 rounded-2xl border
        ${districtDisabled
                            ? "bg-slate-100/50 dark:bg-slate-900/20 opacity-40 cursor-not-allowed border-transparent"
                            : "bg-slate-50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100"
                        }`}
                />
            </div>

            {/* Arama Butonu */}
            <Button
                onClick={() => handleSubmit({ province: province, district: district })}
                type="submit"
                className="w-full md:w-auto h-12 px-10 font-bold text-white transition-all duration-300
               bg-red-600 hover:bg-red-700 active:scale-95
               rounded-2xl shadow-lg shadow-red-200 dark:shadow-red-900/20
               flex items-center justify-center gap-2 group"
            >
                <SearchIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Eczane Ara</span>
            </Button>
        </div>
    )
}