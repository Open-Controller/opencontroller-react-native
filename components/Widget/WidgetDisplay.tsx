import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Widget, Button, Blank, HLayout, VLayout } from 'control-lib';
import BlankDisplay from './BlankDisplay';
import ButtonDisplay from './ButtonDisplay';
import HLayoutDisplay from './HLayoutDisplay';
import VLayoutDisplay from './VLayoutDisplay';

export default function WidgetDisplay({widget}:{widget:Widget}) {
  return (
      <>
        {/* {variant === "ArrowLayout" && <ArrowLayout args={args} children={children}/>}
        {variant === "GridLayout" && <GridLayout args={args} children={children}/>}
        {variant === "HLayout" && <HLayout args={args} children={children}/>}
        {variant === "VLayout" && <VLayout args={args} children={children}/>} */}
        {widget.variant === "Blank" && <BlankDisplay widget={widget as Blank}/>}
        {widget.variant === "Button" && <ButtonDisplay widget={widget as Button}/>}
        {widget.variant === "HLayout" && <HLayoutDisplay widget={widget as HLayout}/>}
        {widget.variant === "VLayout" && <VLayoutDisplay widget={widget as VLayout}/>}
      </>
  );
}