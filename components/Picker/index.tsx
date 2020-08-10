import { Dialog, Portal, Button, List, Text, useTheme, TouchableRipple } from "react-native-paper"
import { View, TouchableOpacity } from "react-native"
import React, { useState, useEffect } from "react";
import { Option, None, Some } from "@hqoss/monads";

export interface PickerEntry<ValueType> {
    value:ValueType
    label:string
}

export const Picker = <ValueType extends string|number=number>({
        placeholder,
        value,
        values,
        onValueChange
    }:{
        placeholder:string,
        value:Option<ValueType>,
        values:PickerEntry<ValueType>[],
        onValueChange:(entry:Option<PickerEntry<ValueType>>)=>void
    })=>{
    const theme = useTheme()
    const [dialogShown,$dialogShown] = useState<boolean>(false)
    const [entry,$entry] = useState<Option<PickerEntry<ValueType>>>(None)
    useEffect(()=>{
        value.match({
            some:(value)=>
                $entry(Some(
                    values.find(v=>v.value===value)
                )),
            none:()=>$entry(None)
        }) 
    },[value])
    return <View>
        <View>
            <TouchableRipple
                style={{
                    backgroundColor: theme.colors.backdrop,
                    paddingHorizontal: 10,
                    paddingVertical: 20,
                    borderTopLeftRadius: theme.roundness,
                    borderTopRightRadius: theme.roundness,
                    overflow:"hidden"
                }}
                onPress={()=>$dialogShown(true)}>
                <Text style={{ fontSize: 16 }}>
                    {entry.isSome() ? entry.unwrap().label : placeholder}
                </Text>
            </TouchableRipple>
        </View>

        <Portal>
            <Dialog
                visible={dialogShown}
                onDismiss={()=>$dialogShown(false)}>
                    <Dialog.Title>{placeholder}</Dialog.Title>
                    <Dialog.Content>
                        {values.map(data => 
                            <List.Item
                                key={data.value}
                                title={data.label}
                                style={{borderRadius:theme.roundness,overflow:"hidden"}}
                                onPress={()=>{onValueChange(Some(data));$dialogShown(false)}}
                            />
                    )}
                    </Dialog.Content>
            </Dialog>
        </Portal>
    </View>
}