import { AudioReceiver } from "./generics";

export const centralAudioReceiver = new AudioReceiver({name:"Central Audio Receiver",wsAddress:"ws://10.0.2.105:3613",host:"192.168.20.30",port:23})