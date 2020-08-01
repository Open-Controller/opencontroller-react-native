import { Controller, HLayout, Button, Macro, VLayout, ArrowLayout, GridLayout, Device, DelayAction, Blank } from "control-lib";
import { TV, Matrix, AudioReceiver } from "../../devices/generics";


export class Roku extends Controller  {
    constructor({name,roku,tv,matrix,matrixCommand,audioReceiver,audioReceiverAddress,audioReceiverOutput}:{name:string,roku:Device,tv:TV,matrix:Matrix,matrixCommand:string,audioReceiver:AudioReceiver,audioReceiverAddress:string,audioReceiverOutput:string}){
        super({name,layout:[
            new HLayout([
                new Button({icon:"home-variant-outline",action:roku.getAction("Home")}),
                new Blank(),
                new Button({icon:"power-off",action:
                    new Macro({name:"off",actions:[
                        
                    ]})
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
                        audioReceiver.getAction(`${audioReceiverAddress}VolumeSet`)
                    ]})
                })
            ]),
            new HLayout([
                new Blank(),
                new ArrowLayout({
                    left:new Button({icon:"chevron-left", action:
                        roku.getAction("Left")
                    }),
                    right:new Button({icon:"chevron-right",action:
                        roku.getAction("Right")
                    }),
                    center:new Button({icon:"crosshairs-gps",action:
                        roku.getAction("Select")
                    }),
                    top:new Button({icon:"chevron-up",action:
                        roku.getAction("Up")
                    }),
                    bottom:new Button({icon:"chevron-down",action:
                        roku.getAction("Down")
                    })
                }),
                new Blank()
            ]),
            new HLayout([
                new VLayout([
                    new Button({icon:"undo-variant",action:
                        roku.getAction("Back")
                    })
                ]),
                new Blank(),
                new HLayout([
                    new Button({icon:"rewind-outline",action:
                        roku.getAction("Rev")
                    }),
                    new Button({icon:"play",action:
                        roku.getAction("Play")
                    }),
                    new Button({icon:"fast-forward-outline",action:
                        roku.getAction("Fwd")
                    })
                ]),
                new Blank(),
                new VLayout([
                    new Button({icon:"information-outline",action:
                        roku.getAction("Info")
                    })
                ])
            ])
        ]})
    }
}