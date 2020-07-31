import { Roku } from "./generics";
import { nookRoku, nookTV, centralMatrix, centralAudioReceiver } from "../devices"

export const NookRoku = new Roku({
    name:"Nook Roku",
    roku:nookRoku,
    tv:nookTV,
    matrix:centralMatrix,
    matrixCommand:"o1i2",
    audioReceiver:centralAudioReceiver,
    audioReceiverAddress:"z2",
    audioReceiverOutput:"DVD"
})