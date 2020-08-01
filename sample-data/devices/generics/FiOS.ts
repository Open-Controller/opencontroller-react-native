import { Device, TelnetAction } from "control-lib"

export class FiOS extends Device {
    constructor({wsAddress,host,port,address,name}:{wsAddress:string,host:string,port:number,address:string,name:string}){
        super({name,actions:[
            new TelnetAction({name:"on",wsAddress,host,port,
            command:"sendir,"+address+",2,38000,1,37,340,170,20,84,20,84,20,170,20,170,20,84,20,170,20,84,20,84,20,84,20,84,20,84,20,84,20,84,20,170,20,84,20,84,20,1268,340,84,20,3365"
            }),

            new TelnetAction({name:"guide",wsAddress,host,port,
            command:"sendir,"+address+",5,38000,1,37,343,172,18,86,18,86,18,86,18,86,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,172,18,172,18,1182,343,86,18,3371"
            }),
            new TelnetAction({name:"up",wsAddress,host,port,
            command:"sendir,"+address+",7,38000,1,37,343,172,18,86,18,86,18,172,18,86,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,86,18,172,18,1182,343,86,18,3371"
            }),
            new TelnetAction({name:"down",wsAddress,host,port,
            command:"sendir,"+address+",8,38000,1,37,343,172,18,172,18,86,18,172,18,86,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,1182,343,86,18,3371"
            }),
            new TelnetAction({name:"left",wsAddress,host,port,
            command:"sendir,"+address+",9,38000,1,37,343,172,18,86,18,172,18,172,18,86,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,172,18,86,18,1010,343,86,18,3371"
            }),
            new TelnetAction({name:"right",wsAddress,host,port,
            command:"sendir,"+address+",10,38000,1,37,343,172,18,172,18,172,18,172,18,86,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,86,18,1010,343,86,18,3371"
            }),
            new TelnetAction({name:"select",wsAddress,host,port,
            command:"sendir,"+address+",11,38000,1,37,343,172,18,172,18,86,18,86,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,172,18,1182,343,86,18,3371"
            }),
    
            new TelnetAction({name:"channelUp",wsAddress,host,port,
            command:"sendir,"+address+",14,38000,1,37,343,172,18,172,18,172,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,172,18,86,18,1182,343,86,18,3371"
            }),
            new TelnetAction({name:"channelDown",wsAddress,host,port,
            command:"sendir,"+address+",15,38000,1,37,343,172,18,86,18,86,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,1354,343,86,18,3371"
            }),
    
    
    
            new TelnetAction({name:"last",wsAddress,host,port,
            command:"sendir,"+address+",37,38000,1,37,343,172,18,172,18,172,18,86,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,1182,343,86,18,3371"
            }),
            new TelnetAction({name:"delete",wsAddress,host,port,
            command:"sendir,"+address+",38,38000,1,37,343,172,18,86,18,86,18,86,18,172,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,86,18,1267,343,86,18,3371"
            }),
    
            new TelnetAction({name:"next",wsAddress,host,port,
            command:"sendir,"+address+",18,38000,1,37,343,172,18,172,18,172,18,172,18,172,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,172,18,838,343,86,18,3371"
            }),
            new TelnetAction({name:"stop",wsAddress,host,port,
            command:"sendir,"+address+",23,38000,1,37,343,172,18,86,18,86,18,172,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,86,18,86,18,1182,343,86,18,3371"
            }),
            new TelnetAction({name:"previous",wsAddress,host,port,
            command:"sendir,"+address+",17,38000,1,37,343,172,18,86,18,86,18,172,18,172,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,86,18,86,18,1182,343,86,18,3371"
            }),
    
            new TelnetAction({name:"rewind",wsAddress,host,port,
            command:"sendir,"+address+",19,38000,1,37,343,172,18,86,18,172,18,172,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,86,18,86,18,1182,343,86,18,3371"
            }),
            new TelnetAction({name:"record",wsAddress,host,port,
            command:"sendir,"+address+",24,38000,1,37,343,172,18,172,18,86,18,86,18,86,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,1182,343,86,18,3371"
            }),
            new TelnetAction({name:"forward",wsAddress,host,port,
            command:"sendir,"+address+",20,38000,1,37,343,172,18,172,18,86,18,172,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,86,18,1182,343,86,18,3371"
            }),
    
            new TelnetAction({name:"pause",wsAddress,host,port,
            command:"sendir,"+address+",21,38000,1,37,343,172,18,172,18,172,18,172,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,1182,343,86,18,3371"
            }),
            new TelnetAction({name:"play",wsAddress,host,port,
            command:"sendir,"+address+",22,38000,1,37,343,172,18,172,18,172,18,86,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,1182,343,86,18,3371"
            }),
    
            new TelnetAction({name:"menu",wsAddress,host,port,
            command:"sendir,"+address+",4,38000,1,37,343,172,18,172,18,86,18,86,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,86,18,1182,343,86,18,3371"
            }),
            new TelnetAction({name:"options",wsAddress,host,port,
            command:"sendir,"+address+",13,38000,1,37,343,172,18,86,18,172,18,86,18,86,18,86,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,172,18,1268,343,86,18,3371"
            }),
            new TelnetAction({name:"exit",wsAddress,host,port,
            command:"sendir,"+address+",12,38000,1,37,343,172,18,86,18,172,18,86,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,172,18,172,18,1182,343,86,18,3371"
            }),
    
            new TelnetAction({name:"info",wsAddress,host,port,
            command:"sendir,"+address+",6,38000,1,37,343,172,18,172,18,172,18,86,18,86,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,172,18,1096,343,86,18,3371"
            }),
            new TelnetAction({name:"guide",wsAddress,host,port,
            command:"sendir,"+address+",5,38000,1,37,343,172,18,86,18,86,18,86,18,86,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,172,18,172,18,1182,343,86,18,3371"
            }),
            new TelnetAction({name:"dvr",wsAddress,host,port,
            command:"sendir,"+address+",16,38000,1,37,343,172,18,172,18,86,18,172,18,172,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,1182,343,86,18,3371"
            }),
    
            new TelnetAction({name:"1",wsAddress,host,port,
            command:"sendir,"+address+",25,38000,1,37,343,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,172,18,172,18,1181,343,86,18,3370"
            }),
            new TelnetAction({name:"2",wsAddress,host,port,
            command:"sendir,"+address+",26,38000,1,37,343,172,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,172,18,1267,343,86,18,3370"
            }),
            new TelnetAction({name:"3",wsAddress,host,port,
            command:"sendir,"+address+",27,38000,1,37,343,172,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,172,18,172,18,1181,343,86,18,3370"
            }),
            new TelnetAction({name:"4",wsAddress,host,port,
            command:"sendir,"+address+",28,38000,1,37,343,172,18,86,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,1353,343,86,18,3370"
            }),
            new TelnetAction({name:"5",wsAddress,host,port,
            command:"sendir,"+address+",29,38000,1,37,343,172,18,172,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,86,18,172,18,1181,343,86,18,3370"
            }),
            new TelnetAction({name:"6",wsAddress,host,port,
            command:"sendir,"+address+",30,38000,1,37,343,172,18,86,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,172,18,1267,343,86,18,3370"
            }),
            new TelnetAction({name:"7",wsAddress,host,port,
            command:"sendir,"+address+",31,38000,1,37,343,172,18,172,18,172,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,86,18,172,18,1182,343,86,18,3371"
            }),
            new TelnetAction({name:"8",wsAddress,host,port,
            command:"sendir,"+address+",32,38000,1,37,343,172,18,86,18,86,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,1439,343,86,18,3371"
            }),
            new TelnetAction({name:"9",wsAddress,host,port,
            command:"sendir,"+address+",33,38000,1,37,343,172,18,172,18,86,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,172,18,86,18,1181,343,86,18,3370"
            }),
            new TelnetAction({name:"0",wsAddress,host,port,
            command:"sendir,"+address+",34,38000,1,37,343,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,1610,343,86,18,3369"
            }),
            new TelnetAction({name:"asterisk",wsAddress,host,port,
            command:"sendir,"+address+",35,38000,1,37,343,172,18,86,18,86,18,172,18,86,18,86,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,1353,343,86,18,3371"
            }),
            new TelnetAction({name:"pound",wsAddress,host,port,
            command:"sendir,"+address+",36,38000,1,37,343,172,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,86,18,86,18,86,18,86,18,86,18,86,18,86,18,172,18,172,18,1354,343,86,18,3371"
            }),
        ]})
    }
}