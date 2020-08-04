import { Device, TCPAction } from "control-lib"

export class AudioReceiver extends Device {
    constructor({host,port,name}:{host:string,port:number,name:string}){
        super({name,actions:[
            new TCPAction({name:"z2On",host,port,
            command:'Z2ON'
            }),
            new TCPAction({name:"z2SetCable",host,port,
            command:'Z2SAT/CBL'
            }),
            new TCPAction({name:"z2SetDVD",host,port,
            command:'Z2DVD'
            }),
            new TCPAction({name:"z2VolumeSet",host,port,
            command:'Z240'
            }),
        ]})
    }
}