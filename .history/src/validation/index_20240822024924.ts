export const errorsValidation=(product:{title:string,description:string})=>{
    let errors:{title?:string,description?:string}={
        title:"",
        description:"",
    }
    const trimedTitle=product.title.trim()
    if(trimedTitle.length===0){

}