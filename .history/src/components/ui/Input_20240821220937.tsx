import { InputHTMLAttributes } from "react"

interface IPorps extends InputHTMLAttributes<HTMLInputElement>{
}
const Input = ({item}: IPorps) => {
    return (     
        <input/>
    )
}

export default Input