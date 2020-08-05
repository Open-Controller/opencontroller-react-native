import { createStore } from "."
import { House } from "control-lib"

export enum HouseResourceVariant {
    URL
}

export interface HouseResource {
    variant: HouseResourceVariant
    location:string
    name:string
    id:string
}

export class HouseResource {
    constructor(variant:HouseResourceVariant,location:string,id:string,name:string){
        this.variant = variant
        this.location = location
        this.id = id
        this.name = name
    }
    async fetch():Promise<House|null>{
        if (this.variant === HouseResourceVariant.URL){
            const json = await (await fetch(this.location)).json()
            return House.fromJSON(json)
        }
        return null
    }
}

export interface SettingsStore {
    houses:HouseResource[]
    lastHouse:string|null
}

export const useSettingsStore = (value:SettingsStore) =>{
    return createStore<SettingsStore>("settings",value)
}