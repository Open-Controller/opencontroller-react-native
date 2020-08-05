import { useState, useEffect, createContext, useCallback } from "react"
import AsyncStorage from '@react-native-community/async-storage';

export interface Store<T extends Record<string,any>> {
    value:T
    setValue:(newValue:T)=>void
}

export const useStoreValue = <S extends Record<string,any>,T>(store:Store<S>,key:keyof S):[T,(n:T)=>void] =>{
    const [value,$value] = useState<T>(store.value[key])
    useEffect(()=>{
        $value(store.value[key])
    },[store.value])
    const setValue = useCallback(async (newValue:T) =>{
        await store.setValue({...store.value,[key]:newValue})
    },[store.value])
    return [value,setValue]
}

export const createStore = <S extends Record<string,any>>(name:string,defaultValue:S):Store<S> => {
    const [value,$value] = useState<S>(defaultValue)
    const setValue = async (newValue:S) => {
        $value(newValue)
        await AsyncStorage.setItem(name,JSON.stringify(newValue))
    }
    return {value,setValue}
}

export const StoresContext = createContext<Record<string,Store<any>>>({})