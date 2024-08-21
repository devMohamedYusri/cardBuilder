interface IPorps extends InputHTMLAttribute<HTMLInputElement>{
}
const Input = ({ }: IPorps) => {
    return (     
        <input key={item.id} type={item.type} name={item.name} className="border-2 border-gray-300" />
    )
}

export default Input