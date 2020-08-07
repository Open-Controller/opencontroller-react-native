import { HasDefault } from "../traits/HasDefault"
import { Option } from "@hqoss/monads"

export const orDefault = <T,A extends HasDefault<T>>(option:Option<T>,constructor:A):T=>{
    return option.unwrapOr(constructor.default())
}