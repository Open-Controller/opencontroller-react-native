import { Controller } from "control-lib";
import { Button } from "react-native-paper";
import React from 'react';

export const MenuItems = ({onPress,menuItems,active}:{onPress:(item:Controller)=>void,menuItems:Controller[],active:(item:Controller)=>boolean})=> {
    return <>
        {menuItems.map((item,i)=>
            <Button 
            mode={"outlined"} 
            style={{margin:10,borderWidth:2,backgroundColor:active(item)?"#ffffff77":"transparent"}} 
            onPress={()=>onPress(item)}
            key={i}>
            {item.name}
            </Button>
        )}
    </>
}