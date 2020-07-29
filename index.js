import { registerRootComponent } from 'expo';
import changeNavigationBarColor from "react-native-navigation-bar-color"
import App from './App';
import React from 'react';
import { DarkTheme, Provider as PaperProvider } from 'react-native-paper';
// import { Appearance } from 'react-native-appearance';

const theme = {
    ...DarkTheme,
    roundness:20,
};
  

const Main = ()=> {
    changeNavigationBarColor('transparent',true,true);
    return (
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    );
}


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(Main);