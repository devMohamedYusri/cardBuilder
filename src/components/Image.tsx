interface IPorps{
    imageURL:string;
    alt:string;
    className:string;
}
const Imag = ({imageURL,alt,className}:IPorps) => {
    return (
        <img src={imageURL} alt={alt} className={className}/>
    )
}

export default Imag