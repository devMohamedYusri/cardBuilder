import { InputHTMLAttributes } from "react"

interface IPorps extends InputHTMLAttributes<HTMLInputElement>{
}
const Input = ({   <input key={item.id} type={item.type} name={item.name} className="border-2 border-gray-300" />}: IPorps) => {
    return (     
        <input/>
    )
}

export default Input