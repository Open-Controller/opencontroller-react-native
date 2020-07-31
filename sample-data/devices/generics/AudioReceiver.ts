import { Device, TelnetAction } from "control-lib"

export class AudioReceiver extends Device {
    constructor({wsAddress,host,port,name}:{wsAddress:string,host:string,port:number,name:string}){
        super({name,actions:[
            new TelnetAction({name:"z2On",wsAddress,host,port,
            command:'Z2ON'
            }),
            new TelnetAction({name:"z2SetCable",wsAddress,host,port,
            command:'Z2SAT/CBL'
            }),
            new TelnetAction({name:"z2SetDVD",wsAddress,host,port,
            command:'Z2DVD'
            }),
            new TelnetAction({name:"z2VolumeSet",wsAddress,host,port,
            command:'Z240'
            }),
        ]})
    }
}