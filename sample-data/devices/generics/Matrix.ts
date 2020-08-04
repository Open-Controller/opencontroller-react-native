import { Device, TCPAction } from "control-lib"

export class Matrix extends Device {
    constructor({host,port,name}:{host:string,port:number,name:string}){
        super({name,actions:[
            new TCPAction({name:"o1i1",host,port,
            command:'11'
            }),
            new TCPAction({name:"o1i2",host,port,
            command:'12'
            })
        ]})
    }
}