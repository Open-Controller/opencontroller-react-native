import { Device, TCPAction } from "control-lib"

export class TV extends Device {
    constructor({host,port,address,name}:{host:string,port:number,address:string,name:string}){
        super({name,actions:[
            new TCPAction({name:"on",host,port,
            command:`sendir,${address},1,40000,3,1,96,24,24,24,48,24,48,24,48,24,24,24,48,24,24,24,48,24,24,24,24,24,24,24,24,1013`
            })
        ]})
    }
}