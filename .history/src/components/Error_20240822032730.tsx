interface IPorps{
    msg:string;
}
const Error = ({msg}:IPorps) => {
    return (
        <p className="text-red-500">{msg}</p>
    )
}

export default Error