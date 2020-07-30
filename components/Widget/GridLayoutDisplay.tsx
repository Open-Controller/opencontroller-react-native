import React from 'react';
import { GridLayout } from "control-lib"
import { View, Text } from 'react-native';
import WidgetDisplay from './WidgetDisplay';

export default function GridLayoutDisplay({widget}:{widget:GridLayout}) {
  return <View>
    {new Array(widget.width).fill(null).map((_,i)=>
      <View>
        {widget.children.slice(i, widget.height+i).map(child=>
            <WidgetDisplay widget={child}/>
        )}
      </View>
    )}
  </View>
}