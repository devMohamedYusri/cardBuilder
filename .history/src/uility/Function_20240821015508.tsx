interface IPorps{
    txt:string;
    limit:number;
}
export const Function = reduceDescription({txt,limit=70}:IPorps) => {
    if(txt.length > limit){
        return`${txt.slice(0,limit)}...`;
    }
        return `${txt}...`
}

