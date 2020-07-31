import { Device, TelnetAction } from "control-lib"

export class TV extends Device {
    constructor({wsAddress,host,port,address,name}:{wsAddress:string,host:string,port:number,address:string,name:string}){
        super({name,actions:[
            new TelnetAction({name:"on",wsAddress,host,port,
            command:`sendir,${address},1,40000,3,1,96,24,24,24,48,24,48,24,48,24,24,24,48,24,24,24,48,24,24,24,24,24,24,24,24,1013`
            })
        ]})
    }
}