import { Device,HttpAction,Macro,Controller,HLayout, VLayout, createWidget as c, Widget } from "control-lib";
import { Button } from "control-lib";
import htm from 'htm'
import { Blank } from "control-lib";
const xml = htm.bind(c);

const TVBase = "http://10.0.2.105:1234"
const TV = new Device({name:"TV",actions:[
    new HttpAction({
        name:"on",
        method:"GET",
        base:TVBase,
        path:"/tvon"
    }),
    new HttpAction({
        name:"off",
        method:"GET",
        base:TVBase,
        path:"/tvoff"
    }),
]})

const STBBase = "http://10.0.2.105:1234"
const STB = new Device({name:"STB",actions:[
    new HttpAction({
        name:"on",
        method:"GET",
        base:STBBase,
        path:"/stbon"
    }),
    new HttpAction({
        name:"off",
        method:"GET",
        base:STBBase,
        path:"/stboff"
    }),
]})

export const fios = new Controller({name:"Fios",layout:[
    xml`
        <${VLayout}>
            <${Blank}/>
            <${Blank}/>
            <${HLayout}>
                <${Button} action=${new Macro({name:"on",actions:[
                    TV.getAction("on"),
                    STB.getAction("on")
                ]})}/>
            </${HLayout}>
        </${VLayout}>
    ` as Widget
]})