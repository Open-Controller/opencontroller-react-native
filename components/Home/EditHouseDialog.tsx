import { Dialog, Text, Button, useTheme, TextInput } from "react-native-paper"
import { Option, None, Some } from "@hqoss/monads"
import React, { useContext, useState, useEffect } from "react"
import { useStoreValue, StoresContext } from "../../store"
import { SettingsStore, HouseResource, HouseResourceVariant } from "../../store/settings"
import { Picker } from "react-native"
import { orDefault } from "../../utils/orDefault"
import { same } from "../../utils/same"
import { diff } from "../../utils/diff"

export const EditHouseDialog = ({id,visible,onClose:close}:{id:Option<string>,visible:boolean,onClose:()=>void})=>{
    const theme = useTheme()
    const {settingsStore} = useContext(StoresContext)
    const [houses,$houses] = useStoreValue<SettingsStore,HouseResource[]>(settingsStore,"houses")
    const [house,$house] = useState<Option<HouseResource>>(None)
    const [validationErrors,$validationErrors] = useState<{ variant: boolean; location: boolean; name: boolean; id: boolean; }>({
        variant:false,
        location:false,
        name:false,
        id:false
    })

    useEffect(()=>{
        id.match({
            some:(id)=>{
                const res = houses.find(same("id",id))
                $house(res?Some(res):None)
            },
            none:()=>$house(None)
        })
    },[id,houses])

    const getValidation = ()=>{
        return house.andThen((house)=>{
            return Some({
                variant:house.variant.isNone(),
                location:house.location.isNone()||house.location.unwrap()==="",
                name:house.name.isNone()||house.name.unwrap()==="",
                id:house.id.isNone()||house.id.unwrap()==="",
            })
        })
    }

    const save = ()=> {
        getValidation().andThen((validation)=>{
            $validationErrors(validation)
            if (!Object.values(validation).find(v=>v===true)) {
                if (house.isSome()) $houses(SettingsStore.addHouse(houses,house.unwrap()))
                close()
            }
            return None
        })
    }

    const deleteHouse = ()=> {
        house.andThen((house)=>{
            house.id.andThen((houseId)=>{
                $houses(SettingsStore.filterHouseId(houses,houseId))
                return None
            })
            return None
        })
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
                error={validationErrors.location}
            />
            <TextInput
                label="Name"
                value={orDefault(house,HouseResource).name.unwrapOr("")}
                onChangeText={name => 
                    $house(Some(orDefault(house,HouseResource).withName(Some(name))))}
                error={validationErrors.name}
            />
            <TextInput
                label="ID"
                value={orDefault(house,HouseResource).id.unwrapOr("")}
                onChangeText={id => 
                    $house(Some(orDefault(house,HouseResource).withId(Some(id))))}
                error={validationErrors.id}
            />
        </Dialog.Content>
        <Dialog.Actions>
            <Button onPress={()=>close()}>Cancel</Button>
            {id.isSome && <Button onPress={()=>{deleteHouse();close()}}>Delete</Button>}
            <Button onPress={()=>{save()}}>Save</Button>
        </Dialog.Actions>
    </Dialog>
}