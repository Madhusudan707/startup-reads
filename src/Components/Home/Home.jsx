import {useState} from 'react'
import {ProductCard } from "../";
import { Search, Sort, Filter,Toast } from "../Reusable";
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
      <div className="flex flex-col w-full bg-yellow-400 top-20  pt-3 lg:flex-row fixed lg:top-24  lg:p-5 lg:w-full ">
        <Search />
        <Sort />
        <Filter />
      </div>
      <ProductCard />
      <Toast msg={msg} isHide={hide}/>
    </div>
  );
};
