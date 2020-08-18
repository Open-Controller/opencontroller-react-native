import React from 'react';
import { GridLayout } from "@open-controller/lib"
import { View, Text } from 'react-native';
import WidgetDisplay from './WidgetDisplay';

export default function GridLayoutDisplay({widget}:{widget:GridLayout}) {
  return <View style={{flexDirection:"row"}}>
    {new Array(widget.width).fill(null).map((_,i)=>
      <View key={i} style={{flexDirection:"column"}}>
        {widget.children.slice(widget.height*(i-1), widget.height+i).map((child,j)=>
            <WidgetDisplay widget={child} key={j}/>
        )}
      </View>
    )}
  </View>
}