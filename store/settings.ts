import { createStore } from "."
import { House } from "control-lib"
import { Option, Some, None } from "@hqoss/monads"
import { HasDefault } from "../traits/HasDefault"

export enum HouseResourceVariant {
    URL
}

export interface HouseResource {
    variant: Option<HouseResourceVariant>
    location:Option<string>
    name:Option<string>
    id:Option<string>
}

export class HouseResource{
    constructor(variant:Option<HouseResourceVariant>,location:Option<string>,id:Option<string>,name:Option<string>){
        this.variant = variant
        this.location = location
        this.id = id
        this.name = name
    }
    async fetch():Promise<Option<House>>{
        if (this.variant.isSome()){
            if (this.variant.unwrap() === HouseResourceVariant.URL){
                if (this.location.isNone()) return None
                const json = await (await fetch(this.location.unwrap())).json()
                return Some(House.fromJSON(json))
            }
        }
        return None
    }
    static fromJSON(json:{variant:HouseResourceVariant,location:string,name:string,id:string}){
        return new HouseResource(Some(json.variant),Some(json.location),Some(json.id),Some(json.name))
    }
    static from({variant,location,name,id}:HouseResource){
        return new HouseResource(variant,location,name,id)
    }
    static default(){
        return new HouseResource(None,None,None,None)
    }
    withVariant(variant:Option<HouseResourceVariant>){
        this.variant = variant
        return this
    }
    withLocation(location:Option<string>){
        this.location = location
        return this
    }
    withId(id:Option<string>){
        this.id = id
        return this
    }
    withName(name:Option<string>){
        this.name = name
        return this
    }
    toJSON(){
        return {
            variant:this.variant.unwrap(),
            location:this.location.unwrap(),
            id:this.id.unwrap(),
            name:this.name.unwrap(),
        }
    }
}

export interface SettingsStore {
    houses:HouseResource[]
    lastHouse:string|null
}

export class SettingsStore {
    static fromJSON(json:any){
        return {
            houses:json.houses.map(HouseResource.fromJSON),
            lastHouse:json.lastHouse
        }
    }
}

export const useSettingsStore = (value:SettingsStore) =>{
    return createStore<SettingsStore>("settings",value)
}