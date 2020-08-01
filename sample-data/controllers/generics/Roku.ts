import { Controller, HLayout, Button, Macro, VLayout, ArrowLayout, GridLayout, Device, DelayAction, Blank } from "control-lib";
import { TV, Matrix, AudioReceiver } from "../../devices/generics";


export class Roku extends Controller  {
    constructor({name,roku,tv,matrix,matrixCommand,audioReceiver,audioReceiverAddress,audioReceiverOutput}:{name:string,roku:Device,tv:TV,matrix:Matrix,matrixCommand:string,audioReceiver:AudioReceiver,audioReceiverAddress:string,audioReceiverOutput:string}){
        super({name,layout:[
            new HLayout([
                new Button({action:roku.getAction("Home")}),
                new Blank(),
                new Button({action:
                    new Macro({name:"off",actions:[
                        
                    ]})
                }),
                new Button({action:
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
                    left:new Button({action:
                        roku.getAction("Left")
                    }),
                    right:new Button({action:
                        roku.getAction("Right")
                    }),
                    center:new Button({action:
                        roku.getAction("Select")
                    }),
                    top:new Button({action:
                        roku.getAction("Up")
                    }),
                    bottom:new Button({action:
                        roku.getAction("Down")
                    })
                }),
                new Blank()
            ]),
            new HLayout([
                new VLayout([
                    new Button({action:
                        roku.getAction("Back")
                    })
                ]),
                new HLayout([
                    new Button({action:
                        roku.getAction("Rev")
                    }),
                    new Button({action:
                        roku.getAction("Play")
                    }),
                    new Button({action:
                        roku.getAction("Fwd")
                    })
                ]),
                new VLayout([
                    new Button({action:
                        roku.getAction("Info")
                    })
                ])
            ])
        ]})
    }
}