interface IPorps {
}
const Input = ({ }: IPorps) => {
    return (
        <div className="flex flex-col w-full">
        <label className="text-slate-200 p-2 pl-0">title</label>
        <input key={item.id} type={item.type} name={item.name} className="border-2 border-gray-300" />
    </div>
    )
}

export default Input