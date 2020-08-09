import { Option } from "@hqoss/monads";

export const diff = <K extends keyof A,A,V>(prop:K,matcher:V)=>(value: Record<K,Option<V>>)=>{
    if (value[prop].isSome()){
        return matcher !== value[prop].unwrap()
    }else{
        return true
    }
}