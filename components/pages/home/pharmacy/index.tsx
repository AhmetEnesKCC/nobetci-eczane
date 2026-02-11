'use client'

import { PharmacyOnDuty } from "@/services/pharmacy-on-duty/types";
import { Pharmacy } from "./pharmacy";
import { useState } from "react";
import { useInterval } from "usehooks-ts";
import { getLocation } from "@/utils/get-location";

export const PharmacyList = ({ pharmacies }: { pharmacies: PharmacyOnDuty[] }) => {

    const [location, setLocation] = useState<GeolocationCoordinates | null>(null);

    useInterval(() => {
        getLocation().then((l) => {
            setLocation(l);
        });
    }, 1000);

    return (
        <div className="flex flex-col gap-2">
            {pharmacies.map((pharmacy) => (
                <Pharmacy key={pharmacy.name} pharmacy={pharmacy} location={location} />
            ))}
        </div>
    )
}