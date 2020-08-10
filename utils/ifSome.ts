import { Option, None } from "@hqoss/monads";

export const ifSome = <O extends Option<V[keyof V]>[],V extends any[]>(opts:O,cb:(vals:V)=>Option<unknown>|void)=>{
    // return opt.andThen((val)=>{
    //     const res = cb(val) 
    //     return res?res:None
    // })
    if (opts.every(opt=>opt.isSome())){
        return cb(opts.map(opt=>opt.unwrap()) as V)
    }
    return None
}