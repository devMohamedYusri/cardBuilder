import "./App.css";
import Card from "./components/Card";
import { productList, fromInput } from "./data/products";
import Button from "./components/ui/Button";
import Modal from "./components/ui/modal";
import { ChangeEvent, useState } from "react";
import Input from "./components/ui/Input";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

 const open=()=> {
    setIsOpen(true);
  }

  const close=()=> {
    setIsOpen(false);
  }

  const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
    const 


  }
  const renderProducts = productList.map((product) => (
    <Card key={product.id} product={product} />
  ));

  const renderInputList = fromInput.map((item) =>
    <div className="flex flex-col w-full">
      <label className="text-slate-200 p-2 pl-0" htmlFor={item.id}>{item.label}</label>
      <Input type={item.type} name={item.name} id={item.id} />
    </div>
  );
  return (
    <div className="container max-w-[70vw]  mx-auto">
      <div className="flex justify-between items-center mt-20">
        <h1 className="text-center text-3xl font-bold my-10">
          Our <span className="text-blue-600">Products</span>
        </h1>
        <Button classes="bg-blue-600 h-10 hover:bg-blue-700 text-white " width="w-fit">
          Add Product
        </Button>
      </div>
      <div className="grid min-[1290px]:grid-cols-4 grid-gap-2 md:grid-gap-4 xl:grid-cols-1 max-[600px]:grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {renderProducts}
      </div>
      <Modal isOpen={isOpen} closeModel={close} title="Add Product">
        <form className="w-full">
          <div className="w-full">
            {renderInputList}
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <Button classes="bg-blue-600 h-10 hover:bg-blue-700 " width="w-full">
              submit
            </Button>
            <Button classes="bg-black-100 h-10 hover:bg-gray-700 " width="w-full">
              cancel
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default App;
