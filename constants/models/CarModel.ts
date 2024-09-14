export interface CarModel {
    id: number;
    make: string;
    model: string;
    year: number;
    trim: string;
    engine: string;
}

export const EMPTY_CAR_MODEL: CarModel = {
    id: 0,
    make: "",
    model: "",
    year: 0,
    trim: "",
    engine: ""
}