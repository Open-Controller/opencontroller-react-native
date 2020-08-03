import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Button, Text, Surface, useTheme, IconButton } from 'react-native-paper';
import ControllerDisplay from '../ControllerDisplay';
import { home } from '../../sample-data/home';
import { House } from 'control-lib';
import Animated, { Easing } from 'react-native-reanimated';
import { MenuItems } from './MenuItems';
import { RouterContext, createRouter, Router } from '../Router';
import { Bar } from './Bar';

const { Value, timing,concat } = Animated;
const easing = Easing.bezier(0.25, 0.1, 0.25, 1)

export default function App() {
  const menuItems = home.rooms.flat().map(room=>room.controllers).flat()
  let [menuOpen,$menuOpen] = useState(false)
  let [controller,$controller] = useState(menuItems[0])
  const router = createRouter({route:"ControllerDisplay",props:{controller}})
  const theme = useTheme()
  
  // useEffect(()=>{setTimeout(()=>router.navigate({route:"Test",props:{}}),2000)},[])

  const [menuHeight] = useState(new Value(0))
  const [remoteOpacity] = useState(new Value(1))
  const [surfaceTitleOpacity] = useState(new Value(0))

  const toggleMenu = () => {
    if (!menuOpen){
      timing(menuHeight, {duration: 400,toValue: 81,easing}).start()
      timing(remoteOpacity, { duration: 400, toValue: 0, easing }).start()
      setTimeout(()=>{
        timing(surfaceTitleOpacity, { duration: 400, toValue: 1, easing }).start()
      },100)
      $menuOpen(true)
    }else {
      timing(surfaceTitleOpacity, { duration: 200, toValue: 0, easing }).start()
      timing(menuHeight, { duration: 400, toValue: 0, easing }).start()
      timing(remoteOpacity, { duration: 400, toValue: 1, easing }).start()
      $menuOpen(false)
    }
  }
  return <Surface style={{...styles.container,backgroundColor:theme.colors.background}}>
        <Bar toggleMenu={toggleMenu} menuOpen={menuOpen} title={router.title}/>
        <Animated.View style={{height:concat(menuHeight,"%"),overflow:"hidden"}}>
          <MenuItems 
            onPress={(controller)=>{router.navigate({route:"ControllerDisplay",props:{controller}});toggleMenu()}} 
            rooms={home.rooms}
            active={(item)=>item==controller}/>
        </Animated.View>
        <TouchableWithoutFeedback onPress={()=>{if(menuOpen)toggleMenu()}}>
          <Surface style={{...styles.controllerCard,elevation: theme.dark?0:16}} pointerEvents={menuOpen?"box-only":"auto"}>
            <Animated.Text style={{...styles.title,color:theme.colors.onSurface,opacity:surfaceTitleOpacity}}>
              {router.title}
            </Animated.Text>
            <Animated.View style={{opacity:remoteOpacity}}>
              <Router value={router} routes={{
                ControllerDisplay:{Component:ControllerDisplay},
                Test:{Component:()=>{useEffect(()=>router.setTitle("Test"),[]);return <Text>test</Text>}}
              }}/>
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
  controllerCard:{
    flex:1,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    padding:10
  },
  title:{
    fontSize:28,
    marginTop:25,
    position:"absolute",
    width:"100%",
    fontWeight:"normal",
    textAlign:"center",
    color:"white"
  }
});
