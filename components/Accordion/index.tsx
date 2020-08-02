import React, { useState, useEffect } from "react"
import { Button } from "react-native-paper"
import { View, Platform, UIManager, LayoutAnimation } from "react-native"

export const Accordion = ({title,children}:{title:string,children:React.ReactNode}) => {
    const [open,$open] = useState<boolean>(false)
    useEffect(()=>{
        if (Platform.OS === 'android') {
            if (UIManager.setLayoutAnimationEnabledExperimental) {
              UIManager.setLayoutAnimationEnabledExperimental(true);
            }
          }        
    },[])
    return <>
        <Button 
            style={{margin:10,borderWidth:2,backgroundColor:"#ffffff44"}} 
            onPress={()=>{
                $open(!open);
                LayoutAnimation.configureNext(LayoutAnimation.create(200,'easeInEaseOut','opacity'))}
            }
            mode="outlined">
            {title}
        </Button>
        <View style={[!open?{height:0}:{},{paddingLeft:5,paddingRight:5,overflow:"hidden"}]}>
            {children}
        </View>
    </>
}