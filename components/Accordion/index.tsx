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
            return React.cloneElement(children, {style: {width:"50%"},key:i});
        })
    }
    return <>
        <Button 
            style={{margin:10,borderWidth:2,backgroundColor:open?"#ffffff44":"transparent"}} 
            onPress={()=>{
                $open(!open);
                LayoutAnimation.configureNext(LayoutAnimation.create(200,'easeInEaseOut','opacity'))}
            }
            mode="outlined">
            {title}
        </Button>
        <View  style={[!open?{height:0}:{},{overflow:"hidden"}]}>
            <Card style={styles.card}>
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
        flexDirection:"row",
        width:"100%"
    },
    cardItem:{
        width:"50%"
    }
})