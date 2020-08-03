import { FiOS } from "./generics";
import { nookFios, nookTV, centralMatrix, centralAudioReceiver } from "../devices"

export const NookFios = new FiOS({
    name:"Nook Fios",
    fios:nookFios,
    tv:nookTV,
    matrix:centralMatrix,
    matrixCommand:"o1i1",
    audioReceiver:centralAudioReceiver,
    audioReceiverAddress:"z2",
    audioReceiverOutput:"Cable"
})