interface IPorps{
    msg:string;
}
const Error = ({msg}:IPorps) => {
    return (msg?  <p className="text-red-500 w-full font-semibold text-sm">{msg}</p>:

    )
}

export default Error