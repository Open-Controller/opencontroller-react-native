import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Button, Text, Surface, useTheme, IconButton } from 'react-native-paper';
import ControllerDisplay from './components/ControllerDisplay';
import { home } from './sample-data/home';
import { House } from 'control-lib';
import Animated, { Easing } from 'react-native-reanimated';

const { Value, timing,concat } = Animated;
const easing = Easing.bezier(0.25, 0.1, 0.25, 1)

export default function App() {
  const menuItems = home.rooms.flat().map(room=>room.controllers).flat()
  let [menuOpen,$menuOpen] = useState(false)
  let [controller,$controller] = useState(menuItems[0])
  const theme = useTheme()

  const [menuHeight] = useState(new Value(0))
  const [remoteOpacity] = useState(new Value(1))
  const [surfaceTitleOpacity] = useState(new Value(0))
  const [surfaceTitleHeight] = useState(new Value(0))

  const toggleMenu = () => {
    if (!menuOpen){
      timing(menuHeight, {duration: 400,toValue: 81,easing}).start()
      timing(remoteOpacity, { duration: 400, toValue: 0, easing }).start()
      setTimeout(()=>{
        timing(surfaceTitleOpacity, { duration: 400, toValue: 1, easing }).start()
        timing(surfaceTitleHeight, { duration: 400, toValue: 30, easing }).start()
      },100)
      $menuOpen(true)
    }else {
      timing(surfaceTitleOpacity, { duration: 200, toValue: 0, easing }).start()
      timing(surfaceTitleHeight, { duration: 200, toValue: 0, easing }).start()
      timing(menuHeight, { duration: 400, toValue: 0, easing }).start()
      timing(remoteOpacity, { duration: 400, toValue: 1, easing }).start()
      $menuOpen(false)
    }
  }
  return <Surface style={styles.container}>
        <View style={{display:"flex", alignItems:"stretch", justifyContent:"space-between",flexDirection:"row"}}>
          <IconButton icon={menuOpen ? "arrow-left":"menu"} color="white" onPress={()=>toggleMenu()}></IconButton>
          <Text>{menuOpen ? "Menu" : controller.name}</Text>
          <IconButton icon="dots-vertical" color="white"></IconButton>
        </View>
        <Animated.View style={{height:concat(menuHeight,"%"),overflow:"hidden"}}>
          {menuItems.map((item,i)=>
            <Button mode={"outlined"} color="white" style={{margin:10,borderWidth:2,backgroundColor:item == controller?"#ffffff77":"transparent"}} onPress={()=>{$controller(item);toggleMenu()}} key={i}>{item.name}</Button>
          )}
        </Animated.View>
        <TouchableWithoutFeedback onPress={()=>{if(menuOpen)toggleMenu()}}>
          <Surface>
            <Animated.Text style={{color:theme.colors.onSurface,opacity:surfaceTitleOpacity,height:surfaceTitleHeight}}>{controller.name}</Animated.Text>
            <Animated.View style={{opacity:remoteOpacity}}>
              <ControllerDisplay controller={controller}/>
            </Animated.View>
          </Surface>
        </TouchableWithoutFeedback>
        <StatusBar style="auto"/>
    </Surface>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:48
  },
});
