import React, { useState, useEffect, useContext } from 'react';
import { View } from 'react-native';

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
    const {currentRoute} = value
    return <RouterContext.Provider value={value}>
        {React.createElement(routes[currentRoute.route].Component,currentRoute.props)}
    </RouterContext.Provider>
}

interface RouterController {
    currentRoute:CurrentRoute,
    title:string,
    navigate:(route:CurrentRoute)=>void
    setTitle:(newTitle:string)=>void
}

export const RouterContext = React.createContext<RouterController>({
    currentRoute:{
        route:"",
        props:{}
    },
    title:"",
    setTitle:()=>{},
    navigate:()=>{}
})

export const createRouter = (defaultRoute:CurrentRoute):RouterController=>{
    const [currentRoute,$currentRoute] = useState<CurrentRoute>(defaultRoute)
    const [title,setTitle] = useState<string>(defaultRoute.route)
    const navigate = (route:CurrentRoute)=>{
        $currentRoute(route)
    }
    return {currentRoute,navigate,title,setTitle}
}