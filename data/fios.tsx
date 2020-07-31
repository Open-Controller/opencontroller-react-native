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

export const fios = Controller.fromJSON({
    "name": "Fios",
    "layout": [
      {
        "variant": "VLayout",
        "children": [
          {
            "variant": "Blank"
          },
          {
            "variant": "Blank"
          },
          {
            "variant": "HLayout",
            "children": [
              {
                "variant": "Button",
                "action": {
                  "variant": "Macro",
                  "actions": [
                    {
                      "variant": "HttpAction",
                      "method": "GET",
                      "url": "http://10.0.2.105:1234/tvon",
                      "name": "on"
                    },
                    {
                      "variant": "HttpAction",
                      "method": "GET",
                      "url": "http://10.0.2.105:1234/stbon",
                      "name": "on"
                    }
                  ],
                  "name": "on"
                }
              },
              {
                "variant": "Button",
                "action": {
                  "variant": "Macro",
                  "actions": [
                    {
                      "variant": "HttpAction",
                      "method": "GET",
                      "base": "http://10.0.2.105:1234/",
                      "path":"tvoff",
                      "name": "off"
                    },
                    {
                      "variant": "HttpAction",
                      "method": "GET",
                      "base": "http://10.0.2.105:1234/",
                      "path":"stboff",
                      "name": "off"
                    }
                  ],
                  "name": "off"
                }
              }
            ]
          }
        ]
      }
    ]
  })