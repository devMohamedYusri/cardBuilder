export const errorsValidation=(product:{title:string,description:string,imageURL:string,price:string})=>{
    const errors:{title?:string,description?:string}={
        title:"",
        description:"",
    }
    const trimmedTitle=product.title.trim();
    if(trimmedTitle.length<10 || trimmedTitle.length>100){
        errors.title="title must be between 10 and 100 characters";
    }

    const trimedDesc=product.Description.trim();
    if(trimedDesc.length<10 || trimedDesc.length>900){
        errors.description="description must be between 10 and 900 characters";
    }

    return errors;
}