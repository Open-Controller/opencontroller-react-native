import React, { useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Title } from "react-native-paper"
import { RouterContext } from "../Router";
import { HouseResource, SettingsStore } from "../../store/settings";
import { House } from "control-lib";
import { StoresContext, useStoreValue } from "../../store";

export const Home = ({setHouseId,toggleMenu}:{setHouseId:(i:string,houses:HouseResource[])=>void,toggleMenu:()=>void})=>{
    const router = useContext(RouterContext)
    const {settingsStore} = useContext(StoresContext)
    const [lastHouse,$lastHouse] = useStoreValue<SettingsStore,string>(settingsStore,"lastHouse")

    const [houses] = useStoreValue<SettingsStore,HouseResource[]>(settingsStore,"houses")
    useEffect(()=>router.setTitle("Home"),[]);
    return <View>
        {houses.map((house)=>
            <Button key={house.id} onPress={()=>{setHouseId(house.id,houses);$lastHouse(house.id);toggleMenu()}}>{house.name}</Button>
        )}
    </View>
}

const styles = StyleSheet.create({

})