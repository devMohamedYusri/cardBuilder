interface IPorps{
    msg:string;
}
const Error = ({msg}:IPorps) => {
    return (
        <p className="text-red-500 w-full font-semibold ">{msg}</p>
    )
}

export default Error