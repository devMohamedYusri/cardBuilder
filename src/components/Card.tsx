import { IProduct } from '../interfaces/IProduct.tsx';
import Imag from './Image.tsx';
import Button from './ui/Button.tsx';
import { reduceDescription } from '../uility/Function.tsx';
import Color from './Color.tsx';

interface IProps{
    product:IProduct;
}
const Card = ({product}:IProps) => {
    return (
        <div className="border rounded-md p-2 flex flex-col">
            <Imag imageURL={product.imageURL} alt={product.title} className="mb-2 rounded"/>
            <h3>{product.title}</h3>
            <p>{reduceDescription({txt:product.description,limit:50})}</p>
            <div className="flex items-center my-4 space-x-2">
                {product.colors.map(color=><Color key={color} color={color} />)}
            </div>
            <div className="flex  items-center justify-between">
                <span className="font-bold to-blue-700">$99</span>
                <Imag imageURL={product.category.imageURL} className="w-12 h-12 rounded-full" alt={product.category.name} />
            </div>
            <div className="flex justify-between items-center space-x-2 mt-5">
                <Button classes="bg-blue-600 text-white hover:bg-blue-700" >edit</Button> 
                <Button classes="bg-red-600 text-white hover:bg-red-700">delete</Button>
            </div>
        </div>
    )
}

export default Card