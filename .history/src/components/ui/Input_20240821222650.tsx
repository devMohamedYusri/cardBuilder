import { InputHTMLAttributes } from "react"

interface IPorps extends InputHTMLAttributes<HTMLInputElement> {}
const Input = ({...rest}: IPorps) => {
    return (     
        <input {...rest} className="border-2 border-gray-300 shadow-md rounded focus:outline-none focus:border-red-600" />
    )
}

export default Input