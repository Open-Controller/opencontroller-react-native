import { Option } from "@hqoss/monads";

export const expect = <T>(option:Option<T>,msg:string)=>{
    if (option.isSome()){
        return option.unwrap()
    }else{
        throw new Error(msg)
    }
}