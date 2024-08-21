import './App.css'
import Card from './components/Card'
import { productList } from './data/products';
import Button from './components/ui/Button';

const App = () => {

  const renderProducts = productList.map(product => <Card key={product.id} product={product} />)
  return (
    <div className="container max-w-[70vw]  mx-auto">
      <div className="flex justify-between items-center mt-20">
      <h1 className="text-center text-3xl font-bold my-10">Our <span className="text-blue-600">Products</span></h1>
      <Button classes="bg-blue-600 h-10 " width="w-fit">Add Product</Button>
      </div>
      <div className="grid min-[1290px]:grid-cols-4 grid-gap-2 md:grid-gap-4 xl:grid-cols-1 max-[600px]:grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {renderProducts}
      </div>
      
    </div>
  )
}

export default App
