import { registerRootComponent } from 'expo';
import changeNavigationBarColor from "react-native-navigation-bar-color"
import App from './components/App';
import React from 'react';
import { DarkTheme, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { LogBox } from 'react-native'
import { Theme } from 'react-native-paper/lib/typescript/src/types';

// HACK: hide require cycle warnings because are absolutely necessary for HLayout, VLayout, etc.
LogBox.ignoreLogs([
  'Require cycle:'
])

const getTheme = (base:Theme):Theme=> ({
    ...base,
    roundness:10,
    mode:'exact',
    colors: {
        ...base.colors,
        primary: base.dark?'#83b9ff':'#448aff',
        accent: '#00e676',
        onSurface: base.dark?'#ffffff77':'#00000044',
        surface: base.dark?"#000":"#fff",
        background: base.dark?"#222":"#fafafa"
    },
    fonts:{
        regular: {
            fontFamily: 'GoogleSansMedium',
            fontWeight: 'normal',
          },
          medium: {
            fontFamily: 'GoogleSansMedium',
            fontWeight: 'normal',
          },
          light: {
            fontFamily: 'GoogleSansMedium',
            fontWeight: 'normal',
          },
          thin: {
            fontFamily: 'GoogleSansMedium',
            fontWeight: 'normal',
          },      
    }
})
  

const Main = ()=> {
    React.useEffect(()=>
        changeNavigationBarColor('transparent',true,true)
    ,[])
    const colorScheme = useColorScheme();
    const [theme,$theme] = React.useState(getTheme(DefaultTheme));
    React.useEffect(()=>{
        if (colorScheme === "dark"){
            $theme(getTheme(DarkTheme))
        }else{
            $theme(getTheme(DefaultTheme))
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