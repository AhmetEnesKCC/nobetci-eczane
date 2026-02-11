'use client'

import { PharmacyOnDuty } from "@/services/pharmacy-on-duty/types"
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card"
import { MapPinIcon, NavigationIcon, PhoneIcon, PlusIcon } from "lucide-react"
import { getLocation } from "@/utils/get-location";
import { useInterval } from "usehooks-ts";
import { useMemo, useState } from "react";
import { getDistance } from "@/utils/get-distance";

export const Pharmacy = ({ pharmacy, location }: { pharmacy: PharmacyOnDuty, location: GeolocationCoordinates | null }) => {



    const distance = useMemo(() => {
        if (!location) return 0;
        return getDistance(pharmacy.loc, `${location.latitude},${location.longitude}`);
    }, [pharmacy.loc, location]);


    const formattedDistance = useMemo(() => {
        return `${distance.toFixed(2)} km`;
    }, [distance]);

    const distanceColor = useMemo(() => {
        if (distance < 1) return "text-green-500 dark:text-green-400";
        if (distance < 5) return "text-yellow-500 dark:text-yellow-400";
        return "text-red-500 dark:text-red-400";
    }, [distance]);

    return (
        <Card className="group relative overflow-hidden transition-all duration-500 rounded-[2rem] 
        bg-white dark:bg-slate-950 
        border-slate-200 dark:border-slate-800 
        hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-red-900/10 
        hover:-translate-y-1">

            {/* Üst Kısım: Başlık ve İlçe */}
            <CardHeader className="pb-4 border-b border-slate-50 dark:border-slate-900/50">
                <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1">
                        <CardTitle className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50 group-hover:text-red-600 transition-colors">
                            {pharmacy.name}

                        </CardTitle>
                        <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            <MapPinIcon className="w-3.5 h-3.5" />
                            {pharmacy.dist}
                        </div>
                    </div>

                    {/* Kırmızı Simge: Açık temada soft, koyu temada neon etkili */}
                    <div className="shrink-0 p-2.5 rounded-2xl transition-colors
              bg-red-50 dark:bg-red-950/30 
              text-red-600 dark:text-red-500">
                        {distance > 0 && <span className={distanceColor}>{formattedDistance}</span>}

                    </div>
                </div>
            </CardHeader>

            <CardContent className="pt-6 space-y-6">
                {/* Adres Bölümü */}
                <div className="relative p-4 rounded-2xl transition-colors
            bg-slate-50 dark:bg-slate-900/40 
            border border-slate-100 dark:border-slate-800/50">
                    <p className="text-sm leading-relaxed font-medium text-slate-600 dark:text-slate-400">
                        {pharmacy.address}
                    </p>
                </div>

                {/* Aksiyon Butonları */}
                <div className="grid grid-cols-2 gap-3">
                    {/* Telefon Butonu */}
                    <a
                        href={`tel:${pharmacy.phone}`}
                        className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all
           bg-white dark:bg-slate-900 
           border border-slate-200 dark:border-slate-800
           text-slate-700 dark:text-slate-200
           hover:bg-slate-50 dark:hover:bg-slate-800
           active:scale-95"
                    >
                        <PhoneIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        {/* Mobilde sadece "Ara" yazıp masaüstünde numarayı gösterebiliriz */}
                        <span className="hidden sm:inline">{pharmacy.phone}</span>
                        <span className="sm:hidden">Ara</span>
                    </a>

                    {/* Yol Tarifi Butonu */}
                    <a
                        href={`http://maps.google.com/?q=${pharmacy.loc}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all
           bg-slate-900 dark:bg-red-600 
           text-white 
           hover:bg-slate-800 dark:hover:bg-red-500
           shadow-lg shadow-slate-200 dark:shadow-red-900/20
           active:scale-95"
                    >
                        <NavigationIcon className="w-4 h-4" />
                        Yol Tarifi
                    </a>
                </div>
            </CardContent>
        </Card>
    )
}