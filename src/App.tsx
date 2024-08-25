import "./App.css";
import Card from "./components/Card";
import { productList, formInput, Colors, categories } from "./data/products";
import Button from "./components/ui/Button";
import Modal from "./components/ui/modal";
import { ChangeEvent, FormEvent, useState } from "react";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces/IProduct";
import { productValidation } from "./validation";
import Error from "./components/Error";
import Color from "./components/Color";
import { v4 as uuid } from "uuid";
import Select from "./components/ui/Select";

const App = () => {
  const defaultProduct: IProduct = {
    title: "",
    description: "",
    price: "",
    imageURL: "",
    colors: [],
    category: {
      name: "",
      avatar: "",
    }
  }

  //states
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [error, setError] = useState({ title: "", description: "", imageURL: "", price: "", colors: "" });
  const [colors, setColors] = useState<string[]>([]);
  const [selected, setSelected] = useState(categories[0]);
  const [ProductToEdit, setProductToEdit] = useState<IProduct>(defaultProduct);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [index, setIndex] = useState(0);
  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setError({ title: "", description: "", imageURL: "", price: "", colors: "" });
    setIsOpen(false);
  }

  const openEdit = () => {
    setColors(ProductToEdit.colors || []);
    setIsOpenEdit(true);
  };

  const closeEdit = () => {
    setColors([]);
    setError({ title: "", description: "", imageURL: "", price: "", colors: "" });
    setIsOpenEdit(false);
  };  


  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setError({
      ...error,
      [name]: ""
    });
  }

  const onChangeToEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProductToEdit({
      ...ProductToEdit,
      [name]: value,
    });

    setError({
      ...error,
      [name]: ""
    });
  }

  const onsubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    product.colors=colors;
    const validate = productValidation(product);
    const hasError = Object.values(validate).some((value) => value !== "");
    if (hasError) {
      if (colors.length===0) {
        setError({ ...validate, colors: "Please select at least one color" });
      } else {
        setError({ ...validate, colors: "" });
      }
    } else {
      setError(validate);
      setProducts((prev) =>  [{ ...product, id: uuid(), category: selected }, ...prev]);
      setProduct(defaultProduct);
      setColors([]);
      close();
    }
  }

  const onsubmitEditHandler = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const validate = productValidation(ProductToEdit);
      const hasError = Object.values(validate).some((value) => value !== "");
      if (hasError) {
        if (!ProductToEdit.colors.length) {
          setError({ ...validate, colors: "Please select at least one color" });
        } else {
          setError({ ...validate, colors: "" });
        }
      } else {
        setError(validate);
        const updatedProducts = [...products];
        updatedProducts[index] = {...ProductToEdit,colors, category: selected};
        setProducts(updatedProducts);
        closeEdit();
      }
  }
  const onCancel = () => {
    setProduct(defaultProduct);
    setError({ title: "", description: "", imageURL: "", price: "", colors: "" });
    setColors([]);
    close();
  };
  
  const onCancelToEdit=()=>{
    setProductToEdit(defaultProduct);
    setError({ title: "", description: "", imageURL: "", price: "", colors: "" });
    setColors([]);
    closeEdit();
  }

  // renders
  const renderProducts = products.map((product,index) => (
    <Card key={product.id} product={product} setProductToEdit={setProductToEdit} openEditModel={openEdit} setIndex={setIndex} index={index}/>
  ));

  const renderInputList = formInput.map((item) =>
    <div className="flex flex-col w-full" key={item.id}>
      <label className="text-black p-2 pl-0" htmlFor={item.id}>{item.label}</label>
      <Input type={item.type} name={item.name} id={item.id} value={product[item.name]} onChange={onChangeHandler} />
      <Error msg={error[item.name]} onChange={onChangeHandler} />
    </div>
  );

  const renderColors = Colors.map(color => <Color key={color} color={color} onClick={() => {
    if (colors.includes(color)) {
      setColors((prev) => prev.filter((c) => c !== color))
    } else {
      setColors((prev) => [...prev, color])
    }
  }} />);

  const renderInputsProductToEdit = formInput.map((input) => 
    <div className="flex flex-col w-full" key={input.id}>
      <label className="text-stone-700 pt-2 pl-0" htmlFor={input.id}>{input.label}</label>
      <Input type={input.type} name={input.name} id={input.id} value={ProductToEdit[input.name]} onChange={onChangeToEditHandler} />
      <Error msg={error[input.name]} onChange={onChangeToEditHandler} />
    </div>
  );

  return (
    <div className="container max-w-[70vw]  mx-auto">
      <div className="flex justify-between items-center mt-20">
        <h1 className="text-center text-3xl font-bold my-10">
          Our <span className="text-blue-600">Products</span>
        </h1>
        <Button classes="bg-blue-600 h-10 hover:bg-blue-700 text-white " width="w-fit" onClick={open}>
          Add Product
        </Button>
      </div>
      <div className="grid min-[1290px]:grid-cols-4 grid-gap-2 md:grid-gap-4 xl:grid-cols-1 max-[600px]:grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {renderProducts}
      </div>
      {/* add product modal */}
      <Modal isOpen={isOpen} closeModel={close} title="Add New Product">
        <form className="w-full" onSubmit={onsubmitHandler}>
          <div className="w-full">
            {renderInputList}
            <Select selected={selected} setSelected={setSelected} />
            <div className="flex items-center flex-wrap my-4 space-x-2">
              {renderColors}
            </div>
            <Error msg={error.colors} />
            <div className="flex items-center flex-wrap">
              {colors.map(color => <span key={color} className="block w-fit h-fit rounded m-2" style={{ backgroundColor: color }}>{color}</span>)}
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <Button classes="bg-blue-600 h-10 hover:bg-blue-700 " width="w-full">
              submit
            </Button>
            <Button classes="bg-black-100 h-10 hover:bg-gray-700 " width="w-full" onClick={onCancel}>
              cancel
            </Button>
          </div>
        </form>
      </Modal>
      {/* edit product modal */}
      <Modal isOpen={isOpenEdit} closeModel={closeEdit} title="Update Product">
        <form className="w-full" onSubmit={onsubmitEditHandler}>
          <div className="w-full">
            {renderInputsProductToEdit}
            <Select selected={ProductToEdit.category} setSelected={(value) => setProductToEdit({...ProductToEdit,category:value})} />
            <div className="flex items-center flex-wrap my-4 space-x-2">
              {renderColors}
            </div>
            <Error msg={error.colors} />
            <div className="flex items-center flex-wrap">
              {colors.map(color => <span key={color} className="block w-fit h-fit rounded m-2" style={{ backgroundColor: color }}>{color}</span>)}
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <Button classes="bg-blue-600 h-10 hover:bg-blue-700 " width="w-full">
              submit
            </Button>
            <Button classes="bg-black-100 h-10 hover:bg-gray-700 " width="w-full" onClick={onCancelToEdit}>
              cancel
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default App;
