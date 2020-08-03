import { Room } from "control-lib";
import { NookRoku, NookFios } from "../controllers";

export const Nook = new Room({name:"Nook",controllers:[
    NookFios,
    NookRoku
]})