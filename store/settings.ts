import { createStore } from "."
import { House } from "control-lib"

export interface SettingsStore {
    house:House
}

export const useSettingsStore = (value:SettingsStore) =>{
    return createStore<SettingsStore>("settings",value)
}