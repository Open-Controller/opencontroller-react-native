import { Dialog, Text, Button, useTheme, TextInput } from "react-native-paper"
import { Option, None, Some } from "@hqoss/monads"
import React, { useContext, useState, useEffect } from "react"
import { useStoreValue, StoresContext } from "../../store"
import { SettingsStore, HouseResource, HouseResourceVariant } from "../../store/settings"
import { Picker } from "react-native"
import { orDefault } from "../../utils/orDefault"

export const EditHouseDialog = ({id,visible,onClose:close}:{id:Option<string>,visible:boolean,onClose:()=>void})=>{
    const theme = useTheme()
    const {settingsStore} = useContext(StoresContext)
    const [houses,$houses] = useStoreValue<SettingsStore,HouseResource[]>(settingsStore,"houses")
    const [house,$house] = useState<Option<HouseResource>>(None)

    useEffect(()=>{
        if (id.isSome()){
            const res = houses.find((h)=>h.id.unwrap()==id.unwrap())
            $house(res?Some(res):None)
        }else{
            $house(None)
        }
    },[id,houses])

    const pushHouse = ()=>{
        house.match({
            some:(house)=>$houses([...houses,house]),
            none:()=>{}
        })
    }
    const deleteHouse = ()=> {
        if (id.isSome()){
            const res = houses.filter((h)=>h.id.unwrap()!==id.unwrap())
            $houses(res)
        }
    }
    
    return <Dialog visible={visible} onDismiss={()=>close()} style={{backgroundColor:theme.colors.background}}>
        <Dialog.Title>{id.isSome()?"Edit House":"Create House"}</Dialog.Title>
        <Dialog.Content>
            <Picker
                selectedValue={orDefault(house,HouseResource).variant.unwrapOr(-1)}
                style={{color:theme.colors.onBackground}}
                onValueChange={(itemValue, itemIndex) =>
                    itemValue!==-1&&$house(Some(orDefault(house,HouseResource).withVariant(Some(itemValue))))
                }>
                <Picker.Item label="Pick" value={-1} />
                <Picker.Item label="URL" value={0} />
            </Picker>
            <TextInput
                label="Location"
                value={orDefault(house,HouseResource).location.unwrapOr("")}
                onChangeText={location => 
                    $house(Some(orDefault(house,HouseResource).withLocation(Some(location))))}
            />
            <TextInput
                label="Name"
                value={orDefault(house,HouseResource).name.unwrapOr("")}
                onChangeText={name => 
                    $house(Some(orDefault(house,HouseResource).withName(Some(name))))}
            />
            <TextInput
                label="ID"
                value={orDefault(house,HouseResource).id.unwrapOr("")}
                onChangeText={id => 
                    $house(Some(orDefault(house,HouseResource).withId(Some(id))))}
            />
        </Dialog.Content>
        <Dialog.Actions>
            <Button onPress={()=>close()}>Cancel</Button>
            {id.isSome && <Button onPress={()=>{deleteHouse();close()}}>Delete</Button>}
            <Button onPress={()=>{pushHouse();close()}}>Save</Button>
        </Dialog.Actions>
    </Dialog>
}