import React, { useState, useEffect, useRef } from "react"
import { Button, Surface, Card } from "react-native-paper"
import { View, Platform, UIManager, LayoutAnimation, StyleSheet } from "react-native"
import { Transitioning, Transition, TransitioningView } from "react-native-reanimated"

export const Accordion = ({title,children}:{title:string,children:JSX.Element[]}) => {
    const [open,$open] = useState<boolean>(false)
    const openTransition = useRef<TransitioningView>(null)
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
            labelStyle={{fontWeight:"800",fontFamily:"GoogleSans-Bold",fontSize:15,}}
            onPress={()=>{
                $open(!open);
                if(openTransition.current) openTransition.current.animateNextTransition();
            }}
            mode="text">
            {title}
        </Button>
        <Transitioning.View  
        style={[!open?{height:0}:{},{overflow:"hidden",padding:1}]}
        transition={<Transition.Change durationMs={180} interpolation="easeInOut" />}
        ref={openTransition}>
            <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>{renderChildren()}</Card.Content>
            </Card>
        </Transitioning.View>
    </View>
}

const styles = StyleSheet.create({
    card:{
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