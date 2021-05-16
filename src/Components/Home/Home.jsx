import {useState} from 'react'
import {ProductCard } from "../";
import { Widget,Toast } from "../Reusable";
import { useEffect } from "react";
import { useFetchLibrary } from "../../hooks"
export const Home = () => {
  const [hide,setHide] = useState()
  const [msg,setMsg] = useState("")
  const { refresh,setRefresh } = useFetchLibrary();
  useEffect(()=>{
    (async()=>{
      const username = await localStorage.getItem("name")
      setRefresh(!refresh)
      setMsg(`Welcome ${ username }`) 
      setTimeout(()=>{
       setHide("hide")
      },1000)
    })()
  
  },[])
  return (
    <div>
      <Widget/>
      <ProductCard />
      <Toast msg={msg} isHide={hide}/>
    </div>
  );
};
