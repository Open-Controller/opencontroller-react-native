import React, { useEffect, useContext } from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper"
import { RouterContext } from "../Router";
import { HouseResource } from "../../store/settings";
import { House } from "control-lib";

export const Home = ({houses,$house}:{houses:HouseResource[],$house:React.Dispatch<React.SetStateAction<House | null>>})=>{
    const router = useContext(RouterContext)

    useEffect(()=>router.setTitle("Home"),[]);
    const setHouse = async (id:string) =>{
        const resource = houses.find(h=>h.id==id)
        if (resource) $house(await resource.fetch())
    }
    return <View>
        <Text>Home</Text>
        {houses.map((house)=>
            <Button key={house.id} onPress={()=>setHouse(house.id)}>{house.name}</Button>
        )}
    </View>
}