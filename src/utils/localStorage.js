export function setItems(key,value){
    {
        try{
            window.localStorage.setItem(key,JSON.stringify((value)))
        }catch(error){
            console.log(error);
        }
    }
}
export function getItems(key)
{
    try{
        const item=window.localStorage.getItem(key);
        return item?JSON.parse(item):undefined;
    }catch(error){
        console.log(error);
    }
}