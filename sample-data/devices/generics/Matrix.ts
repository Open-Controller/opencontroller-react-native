import { Device, TelnetAction } from "control-lib"

export class Matrix extends Device {
    constructor({wsAddress,host,port,name}:{wsAddress:string,host:string,port:number,name:string}){
        super({name,actions:[
            new TelnetAction({name:"o1i1",wsAddress,host,port,
            command:'11'
            }),
            new TelnetAction({name:"o1i2",wsAddress,host,port,
            command:'12'
            })
        ]})
    }
}