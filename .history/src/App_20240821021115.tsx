import './App.css'
import Card from './components/Card'
import {productList} from './data/products';

const App = () => {

  const renderProducts=productList.map(product => <Card key={product.id} product={product} />)
  return (
    <div className="grid grid-gap-4 xl:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-34">    
    {renderProducts}
    </div>
  )
}

export default App
