import { Button, Heading, Close,Payment } from "../";
import {useEffect,useState} from 'react'
import {useAddress,useAPI} from "../../../hooks"
import {useLanguage} from '../../../contexts'
import axios from "axios";
export const Address = () => {

const {label,name,address,country,pincode,city,state,selectAddress} = useAddress()
const [option,setOption] = useState([])
const {languageState} = useLanguage()
const {api} = useAPI()
 useEffect(()=>{
     (async()=>{
         try{
            const userId = await localStorage.getItem("_id")
                const response = await axios.get(`${api.URL}${api.address.GETBYID}${userId}`)
                console.log(`${api.URL}${api.address.GETBYID}${userId}`)
                if(response.data.address){
                  setOption(response.data.address)
                }
               
         }catch(err){
             console.log(`${err} Unable to to Options`)
         }
        
     })()
   
 },[])
  return (
    <>
    <div
      id="address"
      className="modal w-full flex flex-col items-center justify-center z-10"
    >
      <div className=" flex flex-col items-center justify-center border w-full p-16 bg-blue-600 ">
        <Close nameClass="text-white hover:text-red-500 text-3xl" />

        <Heading
          text={languageState.data.shipping_address||"SHIPPING ADDRESS"}
          nameClass="text-center text-3xl lg:text-4xl text-white mb-5 pt-5 "
        />
      
        <div className="flex flex-col w-full flex-wrap">
          <div className="flex flex-row w-full flex-wrap mb-5">
            <div className="relative w-full border-none">
              <select className="bg-gray-600 text-white appearance-none border-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full" onChange={(e)=>{selectAddress(e)}} >
                <option className="pt-6" value="0">{languageState.data.select_address_from_the_list||"SELECT ADDRESS FROM THE LIST"}</option>
                {
                    option.map((item)=>{
                        return (
                            <option key={item._id} value={item.label}>{item.label}</option>
                        )
                    })
                }
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <i className="fas fa-chevron-down text-gray-400"></i>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full flex-wrap">
          <div className='flex flex-col w-full'>
              <label className='px-2'>{languageState.data.address_type||"Address Type"}</label>
              <input type="text"  defaultValue={label} className="lg:w-full w-72 p-5 m-2" />
            </div>
            
           </div>
          <div className="flex flex-row w-full flex-wrap">
            <div className='flex flex-col'>
              <label className='px-2'>{languageState.data.name||"Name"} </label>
              <input type="text"  defaultValue={name} className="w-72 p-5 m-2" />
            </div>
            <div className='flex flex-col'>
              <label className='px-2'> {languageState.data.address||"Address"}  </label>
              <input  type="text"   defaultValue={address} className="w-72 p-5 m-2" />
            </div>
          </div>
          <div className="flex flex-row w-full flex-wrap">
          <div className='flex flex-col'>
              <label className='px-2'>{languageState.data.country||"Country"}  </label>
              <input type="text"  defaultValue={country}  className="w-72 p-5 m-2" />
            </div>
            <div className='flex flex-col'>
              <label className='px-2'>{languageState.data.pincode||"Pincode"}</label>
              <input type="text"    defaultValue={pincode}  className="w-72 p-5 m-2"/>
            </div>

          </div>
          <div className="flex flex-row w-full flex-wrap">
          <div className='flex flex-col'>
              <label className='px-2'>{languageState.data.city||"City"}</label>
              <input type="text"  defaultValue={city} className="w-72 p-5 m-2" />
            </div>
            <div className='flex flex-col'>
              <label className='px-2'>{languageState.data.state||"State"}</label>
              <input type="text" defaultValue={state} className="w-72 p-5 m-2" />
            </div>
            
           
          </div>
        </div>

      <a href='#payment'>  <Button
         text= {languageState.data.continue_to_payment||"CONTINUE TO PAYMENT"}
          nameClass="bg-blue-500 text-white p-4 mt-4 shadow-md hover:bg-gray-600"
        /></a>
      </div>
    </div>
    <Payment/>
    </>
  );
};
