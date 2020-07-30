import React from 'react';
import { ArrowLayout } from "control-lib"
import { View, StyleSheet } from 'react-native';
import WidgetDisplay from './WidgetDisplay';

export default function ArrowLayoutDisplay({widget}:{widget:ArrowLayout}) {

  return <View style={styles.ArrowLayout}>
          <View style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              <WidgetDisplay widget={widget.top}/>
          </View>
          <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <WidgetDisplay widget={widget.left}/>
            <WidgetDisplay widget={widget.center}/>
            <WidgetDisplay widget={widget.right}/>
          </View>
          <View style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <WidgetDisplay widget={widget.bottom}/>
          </View>
  </View>

}

const styles = StyleSheet.create({
  ArrowLayout: {
      display:"flex",
      flexDirection:"column",
      flexWrap:"wrap",
      maxWidth:"auto"
  },
  flexItem:{
      margin:5
  }
});
