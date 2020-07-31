import { Controller, HLayout, Button, Macro, VLayout, ArrowLayout, GridLayout, Device, DelayAction } from "control-lib";
import { TV, Matrix, AudioReceiver } from "../../devices/generics";


export class Roku extends Controller  {
    constructor({name,roku,tv,matrix,matrixCommand,audioReceiver,audioReceiverAddress,audioReceiverOutput}:{name:string,roku:Device,tv:TV,matrix:Matrix,matrixCommand:string,audioReceiver:AudioReceiver,audioReceiverAddress:string,audioReceiverOutput:string}){
        super({name,layout:[
            new HLayout([
                new HLayout([
                    new Button({action:roku.getAction("Home")})
                ]),
                new HLayout([
                    new Button({action:
                        new Macro({name:"on",actions:[
                            tv.getAction("on"),
                            new DelayAction({name:"waitforaudioon",time:200}),
                            matrix.getAction(matrixCommand),
                            new DelayAction({name:"waitforaudioon",time:200}),
                            audioReceiver.getAction(`${audioReceiverAddress}On`),
                            new DelayAction({name:"waitforaudioon",time:2000}),
                            audioReceiver.getAction(`${audioReceiverAddress}Set${audioReceiverOutput}`),
                            new DelayAction({name:"waitforaudioset",time:2000}),
                            audioReceiver.getAction(`${audioReceiverAddress}VolumeSet`)
                        ]})
                    })
                ]),
            ])
        ]})
    }
}