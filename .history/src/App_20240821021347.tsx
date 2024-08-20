import './App.css'
import Card from './components/Card'
import {productList} from './data/products';

const App = () => {

  const renderProducts=productList.map(product => <Card key={product.id} product={product} />)
  return (
    <div className="grid grid-cols-4 grid-gap-4 xl:grid-cols-1 max-[600px]:grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">    
    {renderProducts}
    </div>
  )
}

export default App
