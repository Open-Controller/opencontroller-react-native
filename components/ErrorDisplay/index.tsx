import { Option, None, Some } from "@hqoss/monads";
import { useState, useEffect, ErrorInfo } from "react";
import { Snackbar, Button } from "react-native-paper";
import React from "react"

export interface ErrorContext {
    throwError:(error:Error)=>void
}

export const ErrorContext = React.createContext<ErrorContext>({
    throwError:()=>{}
})

export class ErrorDisplay extends React.Component<{reset:()=>void},{visible:boolean,error:Option<Error>}> {
    constructor(props: Readonly<{ reset: () => void; }>){
        super(props)
        this.state = {
            visible:false,
            error:None
        }
    }
    onReset(){
        const {setState,props:{reset}} = this
        this.setState({visible:false})
        this.props.reset()
    }
    static getDerivedStateFromError(error:Error) { 
        return { error:Some(error) }
    }
    componentDidCatch(error:Error, errorInfo:ErrorInfo) {
        this.setState({ error:Some(error) })
        console.log(error,errorInfo)
    }
    render(){
        const {onReset,setState,state:{visible,error},props:{children}} = this
        return <ErrorContext.Provider value={{throwError:(e:Error)=>{
            this.setState({visible:true})
            this.setState({error:Some(e)})
        }}}>
            <Snackbar
                visible={this.state.visible}
                onDismiss={()=>this.onReset()}
                action={{
                    label: 'Dismiss',
                    onPress: ()=>this.onReset(),
                }}
                duration={Infinity}
                wrapperStyle={{zIndex:3,elevation:18}}
                style={{elevation:0,marginBottom:45}}>
                {this.state.error.unwrapOr(Error()).message}
            </Snackbar>
            {this.props.children}
        </ErrorContext.Provider>
    }
}

// export const ErrorDisplay = ({error,reset}:{error:Option<Error>,reset:()=>void})=>{
//     const [visible,$visible] = useState<boolean>(false)
//     useEffect(()=>{
//         if (error.isSome()) $visible(true)
//     },[error])
//     const onReset = ()=>{
//         $visible(false)
//         reset()
//     }
//     return <Snackbar
//         visible={visible}
//         onDismiss={onReset}
//         action={{
//             label: 'Dismiss',
//             onPress: onReset,
//         }}
//         duration={Infinity}
//         wrapperStyle={{zIndex:3,elevation:18}}
//         style={{elevation:0,marginBottom:45}}>
//         {error.unwrapOr(Error()).message}
//     </Snackbar>
// }