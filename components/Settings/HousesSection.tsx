import { View } from "react-native";
import { IconButton, Portal, Button } from "react-native-paper";
import { None, Option } from "@hqoss/monads";
import { expect } from "../../utils/expect";
import { EditHouseDialog } from "../Home/EditHouseDialog";
import { useContext, useState } from "react";
import { StoresContext, useStoreValue } from "../../store";
import { HouseResource, SettingsStore } from "../../store/settings";
import React from "react"
import { HousesList } from "../HousesList";

export const HousesSection = ()=> {
    const [editDialogShown,$editDialogShown] = useState<boolean>(false)
    const [editDialogId,$editDialogId] = useState<Option<string>>(None)

    return <View>
        <HousesList showAdd={true} onPressAdd={()=>{$editDialogShown(true);$editDialogId(None)}} onPress={house=>{$editDialogId(house.id);$editDialogShown(true)}}/>
        <Portal>
            <EditHouseDialog id={editDialogId} visible={editDialogShown} onClose={()=>$editDialogShown(false)}/>
        </Portal>
    </View>
}