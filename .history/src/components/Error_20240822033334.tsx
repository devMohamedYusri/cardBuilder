interface IPorps{
    msg:string;
}
const Error = ({msg}:IPorps) => {
    return (
        {msg}
    )
}

export default Error