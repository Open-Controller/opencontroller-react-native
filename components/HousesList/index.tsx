import { HouseResource, SettingsStore } from "../../store/settings";
import React, { useContext } from "react"
import { StoresContext, useStoreValue } from "../../store";
import { View } from "react-native";
import { expect } from "../../utils/expect";
import { Button } from "react-native-paper";

export const HousesList = ({onPress,onPressAdd,showAdd}:{onPress:(house:HouseResource)=>void,onPressAdd:()=>void,showAdd:boolean})=>{
    const {settingsStore} = useContext(StoresContext)

    const [houses] = useStoreValue<SettingsStore,HouseResource[]>(settingsStore,"houses")
    return <View>
        {houses.map((house)=>
            <Button 
                key={expect(house.id,"expected house id")}
                onPress={()=>onPress(house)}>
                    {house.name.unwrapOr("Untitled House")}
            </Button>
        )}
        {showAdd&&<Button 
                onPress={()=>onPressAdd()}
                icon="plus">
                    Add House
        </Button>}
    </View>
}