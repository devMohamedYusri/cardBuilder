export const productValidation=(product:{title:string,description:string,imageURL:string,price:string,colors:string[]})=>{
    const errors:{title:string,description:string,imageURL:string,price:string ,colors:string}={
        title:"",
        description:"",
        imageURL:"",
        price:"",
        colors:"",
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
    if(isNaN(Number(trimmedPrice)) || !trimmedPrice.length || trimmedPrice.length>15){
        errors.price="invalid price";
    }


    if(product.colors.length===0){
        errors.colors="please select at least one color";
    }
    return errors;
}