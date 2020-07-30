import { registerRootComponent } from 'expo';
import changeNavigationBarColor from "react-native-navigation-bar-color"
import App from './App';
import React from 'react';
import { DarkTheme, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { YellowBox } from 'react-native'

// HACK: hide require cycle warnings because are absolutely necessary for HLayout, VLayout, etc.
YellowBox.ignoreWarnings([
  'Require cycle:'
])

const themeAdd = {
    roundness:20,
};
  

const Main = ()=> {
    React.useEffect(()=>
        changeNavigationBarColor('transparent',true,true)
    ,[])
    const colorScheme = useColorScheme();
    const [theme,$theme] = React.useState({...DarkTheme,...themeAdd});
    React.useEffect(()=>{
        if (colorScheme === "dark"){
            $theme({...DarkTheme,...themeAdd});
        }else{
            $theme({...DefaultTheme,...themeAdd});
        }
    },[colorScheme])
    return (
        <AppearanceProvider>
            <PaperProvider theme={theme}>
                <App />
            </PaperProvider>
        </AppearanceProvider>
    );
}


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(Main);