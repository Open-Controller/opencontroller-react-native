import { Device, HttpAction } from "control-lib"

export class Roku extends Device {
    constructor({base,name}:{base:string,name:string}){
        const keypressCommands = [
            "Home",
            "Rev",
            "Fwd",
            "Play",
            "Select",
            "Left",
            "Right",
            "Down",
            "Up",
            "Back",
            "InstantReplay",
            "Info",
            "Backspace",
            "Search",
            "Enter"
        ]
        super({name,actions:[
            ...keypressCommands.map(name=>new HttpAction({
                name,
                method:"POST",
                base,
                path:`/keypress/${name}`
            }))
        ]})
    }
}