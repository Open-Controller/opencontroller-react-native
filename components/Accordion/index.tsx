import React, { useState, useEffect } from "react"
import { Button, Surface, Card } from "react-native-paper"
import { View, Platform, UIManager, LayoutAnimation, StyleSheet } from "react-native"

export const Accordion = ({title,children}:{title:string,children:JSX.Element[]}) => {
    const [open,$open] = useState<boolean>(false)
    useEffect(()=>{
        if (Platform.OS === 'android') {
            if (UIManager.setLayoutAnimationEnabledExperimental) {
              UIManager.setLayoutAnimationEnabledExperimental(true);
            }
          }        
    },[])
    const renderChildren = ()=> {
        return children?.map((children,i) => {
            return React.cloneElement(children, {style: {width:"50%",margin:7},key:i});
        })
    }
    return <>
        <Button 
            style={[open?{borderBottomLeftRadius:0,borderBottomRightRadius:0}:{},{margin:10,marginBottom:0,borderWidth:2,backgroundColor:open?"#ffffff44":"transparent"}]} 
            labelStyle={{fontWeight:"800",fontFamily:"GoogleSans-Bold"}}
            onPress={()=>{
                $open(!open);
                LayoutAnimation.configureNext(LayoutAnimation.create(200,'easeInEaseOut','opacity'))}
            }
            mode="outlined">
            {title}
        </Button>
        <View  style={[!open?{height:0}:{},{overflow:"hidden"}]}>
            <Card style={[styles.card,open?{borderTopLeftRadius:0,borderTopRightRadius:0}:{},]}>
                {renderChildren()}
            </Card>
        </View>
    </>
}

const styles = StyleSheet.create({
    card:{
        margin:10,
        marginTop:0,
        padding:5,
        flexDirection:"row"
    },
    cardItem:{
        width:"50%"
    }
})