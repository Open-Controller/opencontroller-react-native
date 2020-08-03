import { Controller, Room } from "control-lib";
import { Button, List, useTheme } from "react-native-paper";
import React, { useEffect, useState } from 'react';
import { View, LayoutAnimation, Platform, UIManager, StyleSheet } from "react-native";
import { Accordion } from "../Accordion";

export const MenuItems = ({onPress,rooms,active}:{onPress:(item:Controller)=>void,rooms:Room[],active:(item:Controller)=>boolean})=> {

    const theme = useTheme()
    return <>
        <List.Section>
            {rooms.map((room,i)=>
                <Accordion
                title={room.name} 
                key={room.name}>
                    {room.controllers.map(controller=>
                        <Button 
                        mode={"outlined"} 
                        style={{backgroundColor:active(controller)?"#ffffff77":"transparent"}} 
                        onPress={()=>onPress(controller)}
                        uppercase={false}
                        key={i}>
                        {controller.name}
                        </Button>
                    )}
                </Accordion>
            )}
        </List.Section>
    </>
}