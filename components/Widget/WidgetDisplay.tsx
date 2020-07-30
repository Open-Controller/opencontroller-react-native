import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Widget, Button, Blank } from 'control-lib';
import BlankDisplay from './BlankDisplay';
import ButtonDisplay from './ButtonDisplay';

export default function WidgetDisplay({widget}:{widget:Widget}) {
  return (
      <>
        {/* {variant === "ArrowLayout" && <ArrowLayout args={args} children={children}/>}
        {variant === "GridLayout" && <GridLayout args={args} children={children}/>}
        {variant === "HLayout" && <HLayout args={args} children={children}/>}
        {variant === "VLayout" && <VLayout args={args} children={children}/>} */}
        {widget.variant === "Blank" && <BlankDisplay widget={widget as Blank}/>}
        {widget.variant === "Button" && <ButtonDisplay widget={widget as Button}/>}
      </>
  );
}