import { useEffect, useContext } from "react"
import { RouterContext } from "../Router"
import { Some } from "@hqoss/monads"
import { View } from "react-native"
import React from "react"
import { StoresContext } from "../../store"
import { HousesSection } from "./HousesSection"
import { Title, Card, useTheme } from "react-native-paper"

export const Settings = ()=>{
    const theme = useTheme()
    const router = useContext(RouterContext)
    useEffect(()=>{
        router.setTitle(Some("Settings"))
    },[])
    const {settingsStore} = useContext(StoresContext)
    return <View>
        <Card style={{backgroundColor:theme.colors.background}}>
            <Title style={{textAlign:"center"}}>Houses</Title>
            <HousesSection/>
        </Card>
    </View>
}