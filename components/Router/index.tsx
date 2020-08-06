import React, { useState, useEffect, useContext } from 'react';
import { View, BackHandler } from 'react-native';
import { Text } from 'react-native-paper';
import { Option, Some, None } from "@hqoss/monads"

interface Route {
    Component: (...args:any)=>JSX.Element
}
interface Routes {
    [k:string]:Route
}
interface CurrentRoute {
    route: string
    props?: any
}

export const Router = ({value,routes}:{value:RouterController,routes:Routes})=>{
    const {history} = value
    useEffect(()=>{
        const handler = ()=>{
            value.navigate(history[1])
            return true
        }
        BackHandler.addEventListener('hardwareBackPress', handler);
        return ()=> BackHandler.removeEventListener('hardwareBackPress',handler)
    },[history])
    return <RouterContext.Provider value={value}>
        {React.createElement(routes[history[0].route].Component,history[0].props)}
    </RouterContext.Provider>
}

export interface RouterController {
    history:CurrentRoute[],
    title:Option<string>,
    navigate:(route:CurrentRoute)=>void
    setTitle:(newTitle:Option<string>)=>void
}

export const RouterContext = React.createContext<RouterController>({
    history:[],
    title:None,
    setTitle:()=>{},
    navigate:()=>{}
})

export const createRouter = (defaultRoute:CurrentRoute):RouterController=>{
    const [history,$history] = useState<CurrentRoute[]>([defaultRoute])
    const [title,setTitle] = useState<Option<string>>(Some(defaultRoute.route))
    const navigate = (route:CurrentRoute)=>{
        if (route) $history([route,...history])
    }
    return {history,navigate,title,setTitle}
}