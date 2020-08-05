import { createStore } from "."
import { House } from "control-lib"

export interface HouseStore {
    current:House
}

export const useHouseStore = (value:HouseStore) =>{
    return createStore<HouseStore>("house",value)
}