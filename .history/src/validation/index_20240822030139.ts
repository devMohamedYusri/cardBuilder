export const errorsValidation=(product:{title:string,description:string,imageURL:string,price:string})=>{
    const errors:{title?:string,description?:string,imageURL:string,price:string}={
        title:"",
        description:"",
        imageURL:"",
        price:""
    }
    const trimmedTitle=product.title.trim();
    if(trimmedTitle.length<10 || trimmedTitle.length>100){
        errors.title="title must be between 10 and 100 characters";
    }

    const trimmedDesc=product.description.trim();
    if(trimmedDesc.length<10 || trimmedDesc.length>900){
        errors.description="description must be between 10 and 900 characters";
    }
    const imageUrlPattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|bmp|svg))$/i;

    if(!imageUrlPattern.test(product.imageURL)){
        errors.imageURL="invalid image url";
    }

    const trimmedPrice=product.price.trim();
    if(isNaN(Number(trimmedPrice)) || !trimmedPrice.length || trimmedPrice.length<15){
        errors.title="title must be between 10 and 100 characters";
    }

    return errors;
}