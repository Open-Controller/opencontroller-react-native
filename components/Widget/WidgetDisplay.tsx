import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Widget, Button, Blank, HLayout, VLayout, GridLayout, ArrowLayout, DynamicText } from '@open-controller/lib';
import BlankDisplay from './BlankDisplay';
import ButtonDisplay from './ButtonDisplay';
import HLayoutDisplay from './HLayoutDisplay';
import VLayoutDisplay from './VLayoutDisplay';
import GridLayoutDisplay from './GridLayoutDisplay';
import ArrowLayoutDisplay from './ArrowLayoutDisplay';
import DynamicTextDisplay from './DynamicTextDisplay';

export default function WidgetDisplay({widget}:{widget:Widget}) {
  return (
      <>
        {/* {__variant__ === "ArrowLayout" && <ArrowLayout args={args} children={children}/>}
        {__variant__ === "GridLayout" && <GridLayout args={args} children={children}/>}
        {__variant__ === "HLayout" && <HLayout args={args} children={children}/>}
        {__variant__ === "VLayout" && <VLayout args={args} children={children}/>} */}
        {widget instanceof Blank && <BlankDisplay widget={widget}/>}
        {widget instanceof Button && <ButtonDisplay widget={widget}/>}
        {widget instanceof HLayout && <HLayoutDisplay widget={widget}/>}
        {widget instanceof VLayout && <VLayoutDisplay widget={widget}/>}
        {widget instanceof GridLayout && <GridLayoutDisplay widget={widget}/>}
        {widget instanceof ArrowLayout && <ArrowLayoutDisplay widget={widget}/>}
        {widget instanceof DynamicText && <DynamicTextDisplay widget={widget}/>}
      </>
  );
}