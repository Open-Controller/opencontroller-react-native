import { createStore } from "."
import { House } from "control-lib"
import { Option, Some, None } from "@hqoss/monads"
import { HasDefault } from "../traits/HasDefault"
import { expect } from "../utils/expect"
import { diff } from "../utils/diff"
import { same } from "../utils/same"

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
        const variant = expect(this.variant,"expected variant")
        if (variant === HouseResourceVariant.URL){
            const json = await (await fetch(expect(this.location,"expected location for url variant"))).json()
            return Some(House.fromJSON(json))
        }
        return None
    }
    static fromJSON(json:{variant:HouseResourceVariant|null,location:string|null,name:string|null,id:string|null}){
        return new HouseResource(
            json.variant!==null?Some(json.variant):None,
            json.location!==null?Some(json.location):None,
            json.id!==null?Some(json.id):None,
            json.name!==null?Some(json.name):None
        )
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
            variant:this.variant.or(Some(null)).unwrap(),
            location:this.location.or(Some(null)).unwrap(),
            id:this.id.or(Some(null)).unwrap(),
            name:this.name.or(Some(null)).unwrap(),
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
    static addHouse(houses:HouseResource[],house:HouseResource){
        return house.id.andThen((houseId)=>{
            if (houses.find(same("id",houseId))){
                const i = houses.findIndex(same("id",houseId))
                return Some(Object.assign([...houses],{[i]:house}))
            }else{    
                return Some([...houses,house])
            }
        }).unwrapOr(houses)
    }
    static filterHouseId(houses:HouseResource[],houseId:string){
        return houses.filter(diff("id",houseId))
    }
}

export const useSettingsStore = (value:SettingsStore) =>{
    return createStore<SettingsStore>("settings",value)
}