interface IProps{
    txt:string;
    limit?:number;
}
export const reduceDescription = ({txt,limit=70}:IPrpps) => {
    if(txt.length > limit){
        return`${txt.slice(0,limit)}...`;
    }
        return `${txt}...`
}

