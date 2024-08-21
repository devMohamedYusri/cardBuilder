import { InputHTMLAttributes } from "react"

interface IPorps extends InputHTMLAttributes<HTMLInputElement>{
}
const Input = ({}: IPorps) => {
    return (     
        <input></input>
    )
}

export default Input