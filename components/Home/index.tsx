import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Title, Portal, Dialog, Paragraph, IconButton } from "react-native-paper"
import { RouterContext } from "../Router";
import { HouseResource, SettingsStore } from "../../store/settings";
import { House } from "control-lib";
import { StoresContext, useStoreValue } from "../../store";
import { Some, None, Option } from "@hqoss/monads";
import { EditHouseDialog } from "./EditHouseDialog";

export const Home = ({setHouseId}:{setHouseId:(i:string,houses:HouseResource[])=>void})=>{
    const router = useContext(RouterContext)
    const {settingsStore} = useContext(StoresContext)
    const [lastHouse,$lastHouse] = useStoreValue<SettingsStore,string>(settingsStore,"lastHouse")

    const [houses] = useStoreValue<SettingsStore,HouseResource[]>(settingsStore,"houses")
    const [editDialogShown,$editDialogShown] = useState<boolean>(false)
    const [editDialogId,$editDialogId] = useState<Option<string>>(None)

    useEffect(()=>router.setTitle(Some("Home")),[]);
    return <View>
        <IconButton onPress={()=>{$editDialogId(None);$editDialogShown(true)}} icon="plus"/>
        {houses.map((house)=>
            <View style={{flexDirection:"row",alignItems:"center"}} key={house.id.unwrap()}>
                <Button style={{flex:1}} contentStyle={{marginLeft:48}} onPress={()=>{setHouseId(house.id.unwrap(),houses);$lastHouse(house.id.unwrap())}}>{house.name.unwrap()}</Button>
                <IconButton icon="pencil-outline" onPress={()=>{$editDialogId(house.id);$editDialogShown(true)}}/>
            </View>
        )}
        <Portal>
            <EditHouseDialog id={editDialogId} visible={editDialogShown} onClose={()=>$editDialogShown(false)}/>
        </Portal>
    </View>
}

const styles = StyleSheet.create({

})