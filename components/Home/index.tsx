import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Title, Portal, Dialog, Paragraph, IconButton } from "react-native-paper"
import { RouterContext } from "../Router";
import { HouseResource, SettingsStore } from "../../store/settings";
import { House } from "opencontroller-lib";
import { StoresContext, useStoreValue } from "../../store";
import { Some, None, Option } from "@hqoss/monads";
import { EditHouseDialog } from "./EditHouseDialog";
import { expect } from "../../utils/expect";
import { HousesList } from "../HousesList";

export const Home = ({setHouseId}:{setHouseId:(i:string,houses:HouseResource[])=>void})=>{
    const router = useContext(RouterContext)
    const {settingsStore} = useContext(StoresContext)
    const [,$lastHouse] = useStoreValue<SettingsStore,string>(settingsStore,"lastHouse")

    const [houses] = useStoreValue<SettingsStore,HouseResource[]>(settingsStore,"houses")

    const [addDialogShown,$addDialogShown] = useState<boolean>(false)

    useEffect(()=>router.setTitle(Some("Home")),[]);
    return <View>
        <Title style={{textAlign:"center"}}>Houses</Title>
        <HousesList showAdd={houses.length===0} onPressAdd={()=>$addDialogShown(true)} onPress={house=>{setHouseId(expect(house.id,"expected house id"),houses);$lastHouse(expect(house.id,"expected house id"))}}/>
        <Portal>
            <EditHouseDialog id={None} visible={addDialogShown} onClose={()=>$addDialogShown(false)}/>
        </Portal>
    </View>
}