import { Device, TCPAction } from "control-lib"

export class FiOS extends Device {
    constructor({host,port,address,name}:{host:string,port:number,address:string,name:string}){
        super({name,actions:[
            new TCPAction({name:"on",host,port,
            command:"sendir,"+address+",2,38000,1,37,340,170,20,84,20,84,20,170,20,170,20,84,20,170,20,84,20,84,20,84,20,84,20,84,20,84,20,84,20,170,20,84,20,84,20,1268,340,84,20,3365"
            }),

            new TCPAction({name:"guide",host,port,
            command:"sendir,"+address+",5,38000,1,37,343,172,18,86,18,86,18,86,18,86,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,172,18,172,18,1182,343,86,18,3371"
            }),
            new TCPAction({name:"up",host,port,
            command:"sendir,"+address+",7,38000,1,37,343,172,18,86,18,86,18,172,18,86,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,86,18,172,18,1182,343,86,18,3371"
            }),
            new TCPAction({name:"down",host,port,
            command:"sendir,"+address+",8,38000,1,37,343,172,18,172,18,86,18,172,18,86,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,1182,343,86,18,3371"
            }),
            new TCPAction({name:"left",host,port,
            command:"sendir,"+address+",9,38000,1,37,343,172,18,86,18,172,18,172,18,86,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,172,18,86,18,1010,343,86,18,3371"
            }),
            new TCPAction({name:"right",host,port,
            command:"sendir,"+address+",10,38000,1,37,343,172,18,172,18,172,18,172,18,86,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,86,18,1010,343,86,18,3371"
            }),
            new TCPAction({name:"select",host,port,
            command:"sendir,"+address+",11,38000,1,37,343,172,18,172,18,86,18,86,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,172,18,1182,343,86,18,3371"
            }),
    
            new TCPAction({name:"channelUp",host,port,
            command:"sendir,"+address+",14,38000,1,37,343,172,18,172,18,172,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,172,18,86,18,1182,343,86,18,3371"
            }),
            new TCPAction({name:"channelDown",host,port,
            command:"sendir,"+address+",15,38000,1,37,343,172,18,86,18,86,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,1354,343,86,18,3371"
            }),
    
    
    
            new TCPAction({name:"last",host,port,
            command:"sendir,"+address+",37,38000,1,37,343,172,18,172,18,172,18,86,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,1182,343,86,18,3371"
            }),
            new TCPAction({name:"delete",host,port,
            command:"sendir,"+address+",38,38000,1,37,343,172,18,86,18,86,18,86,18,172,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,86,18,1267,343,86,18,3371"
            }),
    
            new TCPAction({name:"next",host,port,
            command:"sendir,"+address+",18,38000,1,37,343,172,18,172,18,172,18,172,18,172,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,172,18,838,343,86,18,3371"
            }),
            new TCPAction({name:"stop",host,port,
            command:"sendir,"+address+",23,38000,1,37,343,172,18,86,18,86,18,172,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,86,18,86,18,1182,343,86,18,3371"
            }),
            new TCPAction({name:"previous",host,port,
            command:"sendir,"+address+",17,38000,1,37,343,172,18,86,18,86,18,172,18,172,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,86,18,86,18,1182,343,86,18,3371"
            }),
    
            new TCPAction({name:"rewind",host,port,
            command:"sendir,"+address+",19,38000,1,37,343,172,18,86,18,172,18,172,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,86,18,86,18,1182,343,86,18,3371"
            }),
            new TCPAction({name:"record",host,port,
            command:"sendir,"+address+",24,38000,1,37,343,172,18,172,18,86,18,86,18,86,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,1182,343,86,18,3371"
            }),
            new TCPAction({name:"forward",host,port,
            command:"sendir,"+address+",20,38000,1,37,343,172,18,172,18,86,18,172,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,86,18,1182,343,86,18,3371"
            }),
    
            new TCPAction({name:"pause",host,port,
            command:"sendir,"+address+",21,38000,1,37,343,172,18,172,18,172,18,172,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,1182,343,86,18,3371"
            }),
            new TCPAction({name:"play",host,port,
            command:"sendir,"+address+",22,38000,1,37,343,172,18,172,18,172,18,86,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,1182,343,86,18,3371"
            }),
    
            new TCPAction({name:"menu",host,port,
            command:"sendir,"+address+",4,38000,1,37,343,172,18,172,18,86,18,86,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,86,18,1182,343,86,18,3371"
            }),
            new TCPAction({name:"options",host,port,
            command:"sendir,"+address+",13,38000,1,37,343,172,18,86,18,172,18,86,18,86,18,86,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,172,18,1268,343,86,18,3371"
            }),
            new TCPAction({name:"exit",host,port,
            command:"sendir,"+address+",12,38000,1,37,343,172,18,86,18,172,18,86,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,172,18,172,18,1182,343,86,18,3371"
            }),
    
            new TCPAction({name:"info",host,port,
            command:"sendir,"+address+",6,38000,1,37,343,172,18,172,18,172,18,86,18,86,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,172,18,1096,343,86,18,3371"
            }),
            new TCPAction({name:"guide",host,port,
            command:"sendir,"+address+",5,38000,1,37,343,172,18,86,18,86,18,86,18,86,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,172,18,172,18,1182,343,86,18,3371"
            }),
            new TCPAction({name:"dvr",host,port,
            command:"sendir,"+address+",16,38000,1,37,343,172,18,172,18,86,18,172,18,172,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,1182,343,86,18,3371"
            }),
    
            new TCPAction({name:"1",host,port,
            command:"sendir,"+address+",25,38000,1,37,343,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,172,18,172,18,1181,343,86,18,3370"
            }),
            new TCPAction({name:"2",host,port,
            command:"sendir,"+address+",26,38000,1,37,343,172,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,172,18,1267,343,86,18,3370"
            }),
            new TCPAction({name:"3",host,port,
            command:"sendir,"+address+",27,38000,1,37,343,172,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,172,18,172,18,1181,343,86,18,3370"
            }),
            new TCPAction({name:"4",host,port,
            command:"sendir,"+address+",28,38000,1,37,343,172,18,86,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,1353,343,86,18,3370"
            }),
            new TCPAction({name:"5",host,port,
            command:"sendir,"+address+",29,38000,1,37,343,172,18,172,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,86,18,172,18,1181,343,86,18,3370"
            }),
            new TCPAction({name:"6",host,port,
            command:"sendir,"+address+",30,38000,1,37,343,172,18,86,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,172,18,1267,343,86,18,3370"
            }),
            new TCPAction({name:"7",host,port,
            command:"sendir,"+address+",31,38000,1,37,343,172,18,172,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,86,18,172,18,1182,343,86,18,3371"
            }),
            new TCPAction({name:"8",host,port,
            command:"sendir,"+address+",32,38000,1,37,343,172,18,86,18,86,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,1439,343,86,18,3371"
            }),
            new TCPAction({name:"9",host,port,
            command:"sendir,"+address+",33,38000,1,37,343,172,18,172,18,86,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,172,18,86,18,1181,343,86,18,3370"
            }),
            new TCPAction({name:"0",host,port,
            command:"sendir,"+address+",34,38000,1,37,343,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,1610,343,86,18,3369"
            }),
            new TCPAction({name:"asterisk",host,port,
            command:"sendir,"+address+",35,38000,1,37,343,172,18,86,18,86,18,172,18,86,18,86,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,1353,343,86,18,3371"
            }),
            new TCPAction({name:"pound",host,port,
            command:"sendir,"+address+",36,38000,1,37,343,172,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,1354,343,86,18,3371"
            }),
        ]})
    }
}