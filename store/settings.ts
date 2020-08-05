import { createStore } from "."

export enum HouseResourceVariant {
    URL
}

export interface HouseResource {
    variant: HouseResourceVariant
    location:string
}

export interface SettingsStore {
    houses:HouseResource[]
}

export const useSettingsStore = (value:SettingsStore) =>{
    return createStore<SettingsStore>("settings",value)
}