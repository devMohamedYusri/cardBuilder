interface IPorps{
    msg:string;
}
const Error = ({msg}:IPorps) => {
    return (
        <p className="text-red-500 w-full  ">{msg}</p>
    )
}

export default Error