import { HTMLAttributes } from "react"

interface IProps extends HTMLAttributes<HTMLParagraphElement>{
    msg:string;
}
const Error = ({msg}:IProps) => {
    return (msg?<p className="text-red-500 w-full font-semibold text-sm">{msg}</p>:null)
}

export default Error