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
            return React.cloneElement(children, {style: {width:"45%",margin:7},key:i});
        })
    }
    return <View style={{margin:15,marginTop:0}}>
        <Button 
            style={{borderWidth:2,backgroundColor:open?"#ffffff44":"transparent"}} 
            labelStyle={{fontWeight:"800",fontFamily:"GoogleSans-Bold",fontSize:15,}}
            onPress={()=>{
                $open(!open);
                LayoutAnimation.configureNext(LayoutAnimation.create(200,'easeInEaseOut','opacity'))}
            }
            mode="text">
            {title}
        </Button>
        <View  style={[!open?{height:0}:{},{overflow:"hidden",padding:1}]}>
            <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>{renderChildren()}</Card.Content>
            </Card>
        </View>
    </View>
}

const styles = StyleSheet.create({
    card:{
        margin:10,
        marginTop:0,
        display:"flex"
    },
    cardContent:{
        flexDirection:"row",
    },
    cardItem:{
        width:"50%"
    }
})