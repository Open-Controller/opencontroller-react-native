import React, { useState, useEffect, useContext } from 'react';
import { DynamicText } from "@open-controller/lib"
import { Text } from 'react-native-paper';

export default function DynamicTextDisplay({widget}:{widget:DynamicText}) {
  const [text,$text] = useState<string|number>("")
  useEffect(()=>{
    const unsubscribe = widget.text.onValue($text)
    return ()=> unsubscribe()
  },[])
  return <Text>{text}</Text>
}