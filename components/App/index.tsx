import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext, useCallback } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { Button, Text, Surface, useTheme, IconButton, Title } from 'react-native-paper';
import ControllerDisplay from '../ControllerDisplay';
import { home } from '../../sample-data/home';
import { House, Controller } from 'control-lib';
import Animated, { Easing } from 'react-native-reanimated';
import { MenuItems } from './MenuItems';
import { RouterContext, createRouter, Router } from '../Router';
import { Bar } from './Bar';
import { useStoreValue, StoresContext, Store } from '../../store';
import { SettingsStore, HouseResource } from '../../store/settings';
import { Home } from '../Home';

const { Value, timing,concat } = Animated;
const easing = Easing.bezier(0.25, 0.1, 0.25, 1)


export default function App() {
  const {settingsStore} = useContext(StoresContext)
  const [lastHouse,$lastHouse] = useStoreValue<SettingsStore,string>(settingsStore,"lastHouse")
  const [houses] = useStoreValue<SettingsStore,HouseResource[]>(settingsStore,"houses")

  const [house,$house] = useState<House|null>(null)
  const [menuOpen,$menuOpen] = useState(false)
  const [controller,$controller] = useState<Controller|null>(null)

  const setHouseId = async (id:string,houses:HouseResource[]) =>{
    const resource = houses.find(h=>h.id==id)
    if (resource) $house(await resource.fetch())
    // $lastHouse(id)
  }
  
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

  const router = createRouter({route:"Home",props:{setHouseId,toggleMenu}})
  const theme = useTheme()
  
  // useEffect(()=>{setTimeout(()=>router.navigate({route:"Test",props:{}}),2000)},[])

  

  useEffect(()=>{(async ()=>{
    if (lastHouse){
      setHouseId(lastHouse,houses)
    }
  })()},[lastHouse,houses])

  return <Surface style={{...styles.container,backgroundColor:theme.colors.background}}>
        <Bar toggleMenu={toggleMenu} menuOpen={menuOpen} title={router.title}/>
        <Animated.View style={{height:concat(menuHeight,"%"),overflow:"hidden"}}>
          <MenuItems 
            onPress={(controller)=>{router.navigate({route:"ControllerDisplay",props:{controller}});$controller(controller);toggleMenu()}} 
            rooms={house?house.rooms:[]}
            active={(item)=>item==controller}/>
        </Animated.View>
        <TouchableWithoutFeedback onPress={()=>{if(menuOpen)toggleMenu()}}>
          <Surface style={{...styles.controllerCard,elevation: theme.dark?0:16}} pointerEvents={menuOpen?"box-only":"auto"}>
            <Animated.View style={{opacity:surfaceTitleOpacity}}>
              <Title style={[styles.title,{color:theme.colors.onBackground}]}>{router.title}</Title>
            </Animated.View>
            <Animated.View style={{opacity:remoteOpacity}}>
              <Router value={router} routes={{
                ControllerDisplay:{Component:ControllerDisplay},
                Home:{Component:Home}
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
    fontSize:23,
    marginTop:25,
    position:"absolute",
    width:"100%",
    fontWeight:"normal",
    textAlign:"center",
    color:"white"
  }
});
