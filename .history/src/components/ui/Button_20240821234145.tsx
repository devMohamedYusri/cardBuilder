import { ReactNode } from "react";

interface IPorps extends ButtonHTMLAttributes<HTMLButtonElement>{
    classes:string;
    children:ReactNode;
    width?:'w-full' | 'w-fit';
}
const Button = ({classes,children ,width="w-full",...rest}:IPorps) => {
    return (
        <button className={`${classes} ${width} p-2 rounded-md` } {...rest}> {children}</button>
    )
}

export default Button