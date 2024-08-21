import { InputHTMLAttributes } from "react"
import { IInput } from "../../interfaces/IInput"

interface IPorps extends InputHTMLAttributes<HTMLInputElement> ,IInput{}
const Input = ({..item}: IPorps) => {
    return (     
        <input key={item.id} type={item.type} name={item.name} className="border-2 border-gray-300" />
    )
}

export default Input