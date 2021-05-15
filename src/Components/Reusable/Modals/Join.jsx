import {useEffect} from 'react'
import { Button, Heading, Close,Toast } from "..";
import { useUser } from "../../../hooks";
import {useLanguage} from '../../../contexts'
import "./modal.css";

export const Join = () => {
  const {languageState} = useLanguage()
  const {
    createUser,
    setName,
    setEmail,
    setPassword,
    setCpassword,
    errorMsg,
    setErrorMsg
  } = useUser();
  useEffect(()=>{
    (async()=>{
      if(errorMsg){
        setTimeout(()=>{
          setErrorMsg("")
        },2000)
      }
    })()
  },[])

  return (
    <div  id="join"  className="modal w-full flex flex-col items-center justify-center z-10 ">
    
    <div className=" flex flex-col items-center justify-center border w-full p-16 bg-yellow-400 ">
    {errorMsg ?<Toast msg={errorMsg} bgColor="#EF4444"/>:null}
      <Close nameClass="text-white hover:text-red-500 text-3xl" />
   
         
      <Heading
         text={languageState.data.join_startup_reads||"Join StartUp-Reads"}
        nameClass="text-center text-3xl lg:text-4xl text-white mb-5 pt-5 "
      />
    
      <div className="flex flex-col w-full flex-wrap">
        <div className="flex flex-row w-full flex-wrap">
          <div className='flex flex-col w-full'>
            <label className='px-2'>{languageState.data.enter_name||"Enter Name"}<sup className='text-red-500 text-lg'>*</sup> </label>
            <input type="text"   className=" p-5 m-2"  
            onChange={(e) => {setName(e.target.value)}} />

          </div>
         
        </div>
        <div className="flex flex-row w-full flex-wrap">
        <div className='flex flex-col w-full'>
            <label className='px-2'> {languageState.data.enter_email||"Enter Email"}  </label>
            <input type="text"    className=" p-5 m-2"  onChange={(e) => {setEmail(e.target.value)}}/>
          </div>
         

        </div>
        <div className="flex flex-row w-full flex-wrap">
        <div className='flex flex-col'>
            <label className='px-2 '>{languageState.data.enter_password||"Enter Password"} <sup className='text-red-500 text-lg'>*</sup> </label>
            <input type="password"  className="w-72 p-5 m-2" onChange={(e) => {setPassword(e.target.value)}} />
          </div>
          <div className='flex flex-col'>
            <label className='px-2'>{languageState.data.confirm_password||"Confirm Password"}<sup className='text-red-500 text-lg'>*</sup>  </label>
            <input type="password"  className="w-72 p-5 m-2" onChange={(e) => {setCpassword(e.target.value)}} />
          </div>
          
         
        </div>
      </div>
      {/* <p className="text-white font-bold text-center bg-red-700 p-2 w-96 place-self-center">{errorMsg}</p> */}
     
    <Button
        text={languageState.data.join_now||"JOIN NOW"}
        nameClass="bg-blue-500 text-white p-4 mt-4 shadow-md hover:bg-gray-600"
        btnFunction={createUser}
      />
    </div>
  </div>
    // <div id="join" className="modal">
    //   <div className="modal-content flex flex-col items-center w-full relative ">
    //     <Close nameClass="text-white hover:text-red-500 text-3xl" />
    //     <form
    //       onSubmit={createUser}
    //       className="lg:w-2/5  border flex flex-col lg:h-96 bg-yellow-400  justify-center lg:items-center"
    //     >
    //       <Heading
    //         text={languageState.data.join_startup_reads||"Join StartUp-Reads"}
    //         nameClass="text-center text-3xl lg:text-4xl text-white mb-5 pt-5 "
    //       />
    //       <div className="flex flex-row flex-wrap items-center justify-center">
    //         <input
    //           className="shadow appearance-none w-72   rounded  py-6 px-3 mb-4  lg:mr-4 text-gray-700"
    //           type="text"
    //           placeholder={languageState.data.enter_name||"Enter Name"}
    //           onChange={(e) => {
    //             setName(e.target.value);
    //           }}
    //         />

    //         <input
    //           className="shadow appearance-none  w-72   rounded   py-6 px-3 mb-4  text-gray-700"
    //           type="text"
    //           placeholder={languageState.data.enter_email||"Enter Email"}
    //           onChange={(e) => {
    //             setEmail(e.target.value);
    //           }}
    //         />
    //         <input
    //           className="shadow appearance-none w-72  rounded  py-6 px-3 mb-4 lg:mr-4 text-gray-700"
    //           type="password"
    //           placeholder={languageState.data.enter_password||"Enter Password"}
    //           onChange={(e) => {
    //             setPassword(e.target.value);
    //           }}
    //         />
    //         <input
    //           className="shadow appearance-none w-72  rounded  py-6 px-3 mb-4 text-gray-700"
    //           type="password"
    //           placeholder={languageState.data.confirm_password||"Confirm Password"}
    //           onChange={(e) => {
    //             setCpassword(e.target.value);
    //           }}
    //         />
    //       </div>

    //       <p className="text-red-500 text-center">{errorMsg}</p>
    //       <div className="flex items-center justify-center p-2 lg:py-5">
    //         <Button
    //           nameClass="bg-blue-500 p-2  w-72 text-2xl mb-5 text-white rounded-lg hover:bg-gray-600"
    //           text={languageState.data.join_now||"JOIN NOW"}
    //         />
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
};
