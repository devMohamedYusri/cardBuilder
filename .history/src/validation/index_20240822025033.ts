export const errorsValidation=(product:{title:string,description:string,imageURL:string,price:string})=>{
    const errors:{title?:string,description?:string}={
        title:"",
        description:"",
    }
    const trimedTitle=product.title.trim()
    if(trimedTitle.length<10 || trimedTitle.length>100){
        errors.title="title must be between 10 and 100 characters"
    }

    const trimedDesc=error.Description.trim()
    if(trimedTitle.length<10 || trimedTitle.length>100){
        errors.title="title must be between 10 and 100 characters"
    }
}