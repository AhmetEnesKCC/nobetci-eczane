export interface Province {
    id: number;
    name: string;
    districts: District[];
}

export interface District {
    name: string;
    id: number;
}

export interface GetProvincesResponse {
    data: Province[];
}