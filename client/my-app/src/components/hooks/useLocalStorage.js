import {useEffect,useState} from 'react'
const PREFIX= 'whatsapp-clone';
export default function useLocalStorage(key,initiaValue )  {
    const prefixedkey =PREFIX + key;
    const [value,setValue]=useState(()=>{
        const jsonValue =localStorage.getItem(prefixedkey);
        if(jsonValue!= null) return JSON.parse(jsonValue);
        if(typeof initiaValue === 'function') return initiaValue();
        else return initiaValue;
    })
    useEffect(()=>{
        localStorage.setItem(prefixedkey,JSON.stringify(value)); 
    },[prefixedkey,value])
    return [value,setValue];
}

 