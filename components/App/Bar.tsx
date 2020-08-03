import { View, StyleSheet } from "react-native";
import { IconButton, Text, useTheme } from "react-native-paper";
import React from "react";

export const Bar = ({toggleMenu,menuOpen,title}:{toggleMenu:()=>void,menuOpen:boolean,title:string})=>{
    const theme = useTheme()
    
    return <View style={{display:"flex", alignItems:"stretch", justifyContent:"space-between",flexDirection:"row"}}>
        <IconButton icon={menuOpen ? "arrow-left":"menu"} onPress={()=>toggleMenu()}></IconButton>
        <Text style={{...styles.menuTitle,color:theme.colors.onBackground}}>{menuOpen ? "Menu" : title}</Text>
        <IconButton icon="dots-vertical"></IconButton>
    </View>
}

const styles = StyleSheet.create({
    menuTitle:{
        fontSize:20,
        marginTop:10,
    }
});
