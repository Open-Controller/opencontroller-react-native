import { View, StyleSheet } from "react-native";
import { IconButton, Text, useTheme, Menu, Divider } from "react-native-paper";
import React, { useEffect, useRef, useState, useContext } from "react";
import { Transitioning, Transition, TransitioningView } from "react-native-reanimated";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { RouterController } from "../Router";
import { Option } from "@hqoss/monads";

export const Bar = ({toggleMenu,menuOpen,title,router}:{toggleMenu:()=>void,menuOpen:boolean,title:Option<string>,router:RouterController})=>{
    const theme = useTheme()
    const titleTransition = useRef<TransitioningView>(null)
    const [menuOpenAfterTransition,$menuOpenAfterTransition] = useState<boolean>(menuOpen)
    const [menuVisible,$menuVisible] = useState<boolean>(false)
    useEffect(()=>{
        if (titleTransition.current) titleTransition.current.animateNextTransition();
        $menuOpenAfterTransition(menuOpen)
    },[menuOpen])
    return <View style={{display:"flex", alignItems:"stretch", justifyContent:"space-between",flexDirection:"row"}}>
        <IconButton icon={menuOpenAfterTransition ? "arrow-left":"menu"} onPress={()=>toggleMenu()}></IconButton>
        <Transitioning.View
        transition={<Transition.Change durationMs={180} interpolation="easeInOut" />}
        ref={titleTransition}>
            <Text style={{...styles.menuTitle,color:theme.colors.onBackground}}>{menuOpenAfterTransition ? "Menu" : title.unwrapOr("")}</Text>
        </Transitioning.View>
        <Menu
          visible={menuVisible}
          onDismiss={()=>$menuVisible(false)}
          statusBarHeight={getStatusBarHeight()}
          anchor={<IconButton onPress={()=>$menuVisible(true)} icon="dots-vertical"></IconButton>}>
          <Menu.Item onPress={() => router.navigate({route:"Settings"})} title="Settings" />
        </Menu>
    </View>
}

const styles = StyleSheet.create({
    menuTitle:{
        fontSize:20,
        marginTop:10,
    }
});
