import { HTMLAttributes } from "react";

interface IPorps extends HTMLAttributes<HTMLSpanElement> {
    color: string;
}
const Color = ({ color ,...rest}: IPorps) => {
    return (
        <span
            className="block w-4 h-4 rounded-full cursor-pointer"
            style={{ backgroundColor: color }}
            {...rest}
        />
    )
}

export default Color