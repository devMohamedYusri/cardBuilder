import { IProduct } from '../interfaces/IProduct.tsx';
import Imag from './Image.tsx';
import Button from './ui/Button.tsx';
import { reduceDescription } from '../uility/Function.tsx';

interface IProps{
    product:IProduct;
}
const Card = ({product}:IProps) => {
    return (
        // <div className="border rounded-md p-2 flex flex-col">
        //     <Imag imageURL={product.imageURL} alt={product.title} className="mb-2 rounded"/>
        //     <h3>{product.title}</h3>
        //     <p>{reduceDescription({txt:product.description,limit:100})}</p>
        //     <div className="flex items-center my-4 space-x-2">
        //         <span className="w-4 h-4 bg-black rounded-full cursor-pointer" />
        //         <span className="w-4 h-4 bg-black rounded-full cursor-pointer" />
        //         <span className="w-4 h-4 bg-black rounded-full cursor-pointer" />
        //     </div>
        //     <div className="flex  items-center justify-between">
        //         <span className="font-bold to-blue-700">$99</span>
        //         <Imag imageURL={product.imageURL} className="w-12 h-12 rounded-full" alt={product.title} />
        //     </div>
        //     <div className="flex justify-between items-center space-x-2 mt-5">
        //         <Button classes="bg-blue-500" >edit</Button> 
        //         <Button classes="bg-red-500">delete</Button>
        //     </div>
        // </div>


        <div className="border rounded-md p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
    {/* Image Section */}
    <Imag
        imageURL={product.imageURL}
        alt={product.title}
        className="mb-2 sm:mb-0 sm:w-32 sm:h-32 w-full h-auto rounded object-cover"
    />
    
    {/* Product Information */}
    <div className="flex-1 flex flex-col space-y-2 sm:space-y-4 sm:px-4">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-sm text-gray-600">
            {reduceDescription({ txt: product.description, limit: 100 })}
        </p>
        
        {/* Colors Section */}
        <div className="flex items-center my-2 space-x-2">
            {product.colors.map((color, index) => (
                <span
                    key={index}
                    className="w-4 h-4 rounded-full cursor-pointer"
                    style={{ backgroundColor: color }}
                />
            ))}
        </div>
    </div>
    
    {/* Price and Small Image */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
        <span className="font-bold text-blue-700 mb-2 sm:mb-0">${product.price}</span>
        <Imag
            imageURL={product.imageURL}
            className="w-12 h-12 rounded-full"
            alt={product.title}
        />
    </div>
    
    {/* Buttons */}
    <div className="flex justify-between items-center space-x-2 mt-4 sm:mt-0">
        <Button classes="bg-blue-500 px-4 py-2 text-white rounded">Edit</Button> 
        <Button classes="bg-red-500 px-4 py-2 text-white rounded">Delete</Button>
    </div>
</div>

    )
}

export default Card