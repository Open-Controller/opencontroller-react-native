import { Option } from "@hqoss/monads";
import { useState, useEffect } from "react";
import { Snackbar } from "react-native-paper";
import React from "react"

export const ErrorDisplay = ({error,reset}:{error:Option<Error>,reset:()=>void})=>{
    const [visible,$visible] = useState<boolean>(false)
    useEffect(()=>{
        if (error.isSome()) $visible(true)
    },[error])
    const onReset = ()=>{
        $visible(false)
        reset()
    }
    return <Snackbar
        visible={visible}
        onDismiss={onReset}
        action={{
            label: 'Dismiss',
            onPress: onReset,
        }}
        duration={Infinity}
        style={{zIndex:2,marginBottom:45}}>
        {error.unwrapOr(Error()).message}
    </Snackbar>
}