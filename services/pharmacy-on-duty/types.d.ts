export interface PharmacyOnDuty {
    name: string
    dist: string
    address: string
    phone: string
    loc: string
}
export interface GetPharmacyOnDutyResponse {
    result: PharmacyOnDuty[]
}

export interface GetPharmacyOnDutyParams {
    ilce: string,
    il: string

}