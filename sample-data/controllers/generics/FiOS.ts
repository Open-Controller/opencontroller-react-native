import { Controller, HLayout, Macro, VLayout, ArrowLayout, GridLayout, Device, Custom, Button, Blank, DelayAction } from "control-lib";
import { TV, Matrix, AudioReceiver } from "../../devices/generics";

export class FiOS extends Controller {
    constructor({name,fios,tv,matrix,matrixCommand,audioReceiver,audioReceiverAddress,audioReceiverOutput}:{name:string,fios:Device,tv:TV,matrix:Matrix,matrixCommand:string,audioReceiver:AudioReceiver,audioReceiverAddress:string,audioReceiverOutput:string}){
        super({name,layout:[
            new HLayout([
                new Button({icon:"home-variant-outline",action:
                    new Macro({name:"hgtv",actions:[
                        // fios.getAction("hgtv")
                    ]}), 
                }),
                new Blank(),
                new Button({icon:"power-off",action:
                    new Macro({name:"off",actions:[
                        // fios.getAction("")
                    ]}),
                }),
                new Button({icon:"power-on",action:
                    new Macro({name:"on",actions:[
                        tv.getAction("on"),
                        new DelayAction({name:"waitfortvon",time:200}),
                        matrix.getAction(matrixCommand),
                        new DelayAction({name:"waitformatrix",time:200}),
                        audioReceiver.getAction(`${audioReceiverAddress}On`),
                        new DelayAction({name:"waitforaudioon",time:2000}),
                        audioReceiver.getAction(`${audioReceiverAddress}Set${audioReceiverOutput}`),
                        new DelayAction({name:"waitforaudioset",time:2000}),
                        audioReceiver.getAction(`${audioReceiverAddress}VolumeSet`),
                        fios.getAction("on")
                    ]})
                })
            ]),
            new HLayout([
                new VLayout([
                    new Button({icon:"menu-up-outline",action:
                        new Macro({name:"on",actions:[
                            // fios.getAction("")
                        ]}),
                    }),
                    new Button({icon:"volume-off",action:
                        new Macro({name:"off",actions:[
                            // fios.getAction("")
                        ]}),
                    }),
                    new Button({icon:"menu-down-outline",action:
                        new Macro({name:"off",actions:[
                            // fios.getAction("")
                        ]})
                    })
                ]),
                new Blank(),
                new ArrowLayout({
                    left:new Button({icon:"chevron-left",action:
                        fios.getAction("left")
                    }),
                    right:new Button({icon:"chevron-right",action:
                        fios.getAction("right")
                    }),
                    center:new Button({icon:"crosshairs-gps",action:
                        fios.getAction("select")
                    }),
                    top:new Button({icon:"chevron-up",action:
                        fios.getAction("up")
                    }),
                    bottom:new Button({icon:"chevron-down",action:
                        fios.getAction("down")
                    }),
                }),
                new Blank(),
                new VLayout([
                    new Button({icon:"menu-up-outline",action:
                        fios.getAction("channelUp")
                    }),
                    new Button({icon:"alpha-c",action:
                        new Macro({name:"channel",actions:[]})
                    }),
                    new Button({icon:"menu-down-outline",action:
                        fios.getAction("channelDown")
                    })
                ]),
            ]),
            new HLayout([
                new VLayout([
                    new Button({icon:"undo-variant",action:
                        fios.getAction("last")
                    }),
                    new Button({icon:"trash-can-outline",action:
                        fios.getAction("delete")
                    }),
                ]),
                new Blank(),
                new VLayout([
                    new HLayout([
                        new Button({icon:"menu-left-outline",action:
                            fios.getAction("previous")
                        }),
                        new Button({icon:"stop",action:
                            fios.getAction("stop")
                        }),
                        new Button({icon:"menu-right-outline",action:
                            fios.getAction("next")
                        }),
                    ]),
                    new HLayout([
                        new Button({icon:"rewind-outline",action:
                            fios.getAction("rewind")
                        }),
                        new Button({icon:"radiobox-marked",action:
                            fios.getAction("record")
                        }),
                        new Button({icon:"fast-forward-outline",action:
                            fios.getAction("forward")
                        }),
                    ]),
                ]),
                new Blank(),
                new VLayout([
                    new Button({icon:"pause",action:
                        fios.getAction("pause")
                    }),
                    new Button({icon:"play",action:
                        fios.getAction("play")
                    }),
                ])
            ]),
            new HLayout([
                new VLayout([
                    new Button({icon:"menu",action:
                        fios.getAction("menu")
                    }),
                    new Button({icon:"settings-outline",action:
                        fios.getAction("options")
                    }),
                    new Button({icon:"exit-to-app",action:
                        fios.getAction("exit")
                    }),
                ]),
                new Blank(),
                new VLayout([
                    new HLayout([
                        new Button({icon:"numeric-1",action:
                            fios.getAction("1")
                        }),
                        new Button({icon:"numeric-2",action:
                            fios.getAction("2")
                        }),
                        new Button({icon:"numeric-3",action:
                            fios.getAction("3")
                        }),
                    ]),
                    new HLayout([
                        new Button({icon:"numeric-4",action:
                            fios.getAction("4")
                        }),
                        new Button({icon:"numeric-5",action:
                            fios.getAction("5")
                        }),
                        new Button({icon:"numeric-6",action:
                            fios.getAction("6")
                        }),
                    ]),
                    new HLayout([
                        new Button({icon:"numeric-7",action:
                            fios.getAction("7")
                        }),
                        new Button({icon:"numeric-8",action:
                            fios.getAction("8")
                        }),
                        new Button({icon:"numeric-9",action:
                            fios.getAction("9")
                        }),
                    ]),
                    new HLayout([
                        new Button({icon:"asterisk",action:
                            fios.getAction("asterisk")
                        }),
                        new Button({icon:"numeric-0",action:
                            fios.getAction("0")
                        }),
                        new Button({icon:"pound",action:
                            fios.getAction("pound")
                        }),
                    ])
                ]),
                new Blank(),
                new VLayout([
                    new Button({icon:"information-outline",action:
                        fios.getAction("info")
                    }),
                    new Button({icon:"television-guide",action:
                        fios.getAction("guide")
                    }),
                    new Button({icon:"folder-star-outline",action:
                        fios.getAction("dvr")
                    }),
                ]),
            ])
        ]})
    }
}