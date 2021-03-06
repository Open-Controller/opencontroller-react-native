import { Dialog, Text, Button, useTheme, TextInput } from "react-native-paper"
import { Option, None, Some } from "@hqoss/monads"
import React, { useContext, useState, useEffect } from "react"
import { useStoreValue, StoresContext } from "../../store"
import { SettingsStore, HouseResource, HouseResourceVariant } from "../../store/settings"
import { orDefault } from "../../utils/orDefault"
import { same } from "../../utils/same"
import { diff } from "../../utils/diff"
import { Picker } from "../Picker"

export const EditHouseDialog = ({id,visible,onClose:close}:{id:Option<string>,visible:boolean,onClose:()=>void})=>{
    const theme = useTheme()
    const {settingsStore} = useContext(StoresContext)
    const [houses,$houses] = useStoreValue<SettingsStore,HouseResource[]>(settingsStore,"houses")
    const [house,$house] = useState<HouseResource>(HouseResource.default())
    const [validationErrors,$validationErrors] = useState<{ variant: boolean; location: boolean; name: boolean; id: boolean; }>({
        variant:false,
        location:false,
        name:false,
        id:false
    })
    useEffect(()=>{
        $validationErrors({
            variant:false,
            location:false,
            name:false,
            id:false
        })
    },[id])

    useEffect(()=>{
        id.match({
            some:(id)=>{
                const res = houses.find(same("id",id))
                if (res) $house(res)
            },
            none:()=>$house(HouseResource.default())
        })
    },[id,houses])

    const getValidation = ()=>{
        return {
            variant:house.variant.isNone(),
            location:house.location.isNone()||house.location.unwrap()==="",
            name:house.name.isNone()||house.name.unwrap()==="",
            id:house.id.isNone()||house.id.unwrap()==="",
        }
    }

    const save = ()=> {
        const validation = getValidation()
        $validationErrors(validation)
        if (!Object.values(validation).find(v=>v===true)) {
            $houses(SettingsStore.addHouse(houses,house))
            close()
        }
    }

    const deleteHouse = ()=> {
        house.id.andThen((houseId)=>{
            $houses(SettingsStore.filterHouseId(houses,houseId))
            return None
        })
    }
    
    return <Dialog visible={visible} onDismiss={()=>close()} style={{backgroundColor:theme.colors.background}}>
        <Dialog.Title>{id.isSome()?"Edit House":"Create House"}</Dialog.Title>
        <Dialog.Content>
            <Picker
                placeholder="Choose a variant"
                value={house.variant}
                onValueChange={(entry) =>
                    entry.isSome() && $house(house.withVariant(Some(entry.unwrap().value)))
                }
                values={[
                    {label:"URL",value:0}
                ]}
            />
            <TextInput
                label="Location"
                value={house.location.unwrapOr("")}
                onChangeText={location => 
                    $house(house.withLocation(Some(location)))}
                error={validationErrors.location}
            />
            <TextInput
                label="Name"
                value={house.name.unwrapOr("")}
                onChangeText={name => 
                    $house(house.withName(Some(name)))}
                error={validationErrors.name}
            />
            <TextInput
                label="ID"
                value={house.id.unwrapOr("")}
                onChangeText={id => 
                    $house(house.withId(Some(id)))}
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