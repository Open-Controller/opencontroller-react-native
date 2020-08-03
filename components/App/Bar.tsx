import { View, StyleSheet } from "react-native";
import { IconButton, Text, useTheme } from "react-native-paper";
import React, { useEffect, useRef, useState } from "react";
import { Transitioning, Transition, TransitioningView } from "react-native-reanimated";

export const Bar = ({toggleMenu,menuOpen,title}:{toggleMenu:()=>void,menuOpen:boolean,title:string})=>{
    const theme = useTheme()
    const titleTransition = useRef<TransitioningView>(null)
    const [menuOpenAfterTransition,$menuOpenAfterTransition] = useState<boolean>(menuOpen)
    useEffect(()=>{
        if (titleTransition.current) titleTransition.current.animateNextTransition();
        $menuOpenAfterTransition(menuOpen)
    },[menuOpen])
    return <View style={{display:"flex", alignItems:"stretch", justifyContent:"space-between",flexDirection:"row"}}>
        <IconButton icon={menuOpenAfterTransition ? "arrow-left":"menu"} onPress={()=>toggleMenu()}></IconButton>
        <Transitioning.View
        transition={<Transition.Change durationMs={180} interpolation="easeInOut" />}
        ref={titleTransition}>
            <Text style={{...styles.menuTitle,color:theme.colors.onBackground}}>{menuOpenAfterTransition ? "Menu" : title}</Text>
        </Transitioning.View>
        <IconButton icon="dots-vertical"></IconButton>
    </View>
}

const styles = StyleSheet.create({
    menuTitle:{
        fontSize:20,
        marginTop:10,
    }
});
