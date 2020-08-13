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
    const {history,route} = value
    useEffect(()=>{
        const handler = ()=>{
            value.back()
            return true
        }
        BackHandler.addEventListener('hardwareBackPress', handler);
        return ()=> BackHandler.removeEventListener('hardwareBackPress',handler)
    },[history,route])
    return <RouterContext.Provider value={value}>
        {route.isSome()&&React.createElement(routes[history[route.unwrap()].route].Component,history[route.unwrap()].props)}
    </RouterContext.Provider>
}

export interface RouterController {
    route:Option<number>,
    history:CurrentRoute[],
    title:Option<string>,
    navigate:(route:CurrentRoute)=>void
    back:()=>void
    setTitle:(newTitle:Option<string>)=>void
}

export const RouterContext = React.createContext<RouterController>({
    route:None,
    history:[],
    title:None,
    setTitle:()=>{},
    navigate:()=>{},
    back:()=>{}
})

export const createRouter = (defaultRoute:CurrentRoute):RouterController=>{
    const [history,$history] = useState<CurrentRoute[]>([defaultRoute])
    const [title,setTitle] = useState<Option<string>>(Some(defaultRoute.route))
    const [route,$route] = useState<Option<number>>(Some(0))
    const navigate = (newRoute:CurrentRoute)=>{
        if (newRoute) {
            route.andThen(route=>{
                $history(Object.assign([...history],{[route+1]:newRoute}))
                $route(Some(route+1))
                return None
            })
        }
    }
    const back = ()=>{
        route.andThen(route=>{
            if (history[route-1]) $route(Some(route-1))
            return None
        })
    }
    return {history,navigate,title,setTitle,route,back}
}