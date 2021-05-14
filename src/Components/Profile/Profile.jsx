import {Button} from '../Reusable'
import {useEffect,useState} from 'react'
import axios from 'axios'
import {useAPI} from '../../hooks'
export const Profile = () => {
    const [name,setName] = useState()
    const [password,setPassword] = useState()
    const [email,setEmail] = useState()
    const {api} = useAPI()
    useEffect(()=>{
        (async()=>{

            try{
                const userId = await localStorage.getItem("_id")
                const response = await axios(`${api.URL}${api.users.GETBYID}${userId}`)
               
                const userData = response.data.data

                setName(userData.name)
                setEmail(userData.email)
                setPassword(userData.password)
            }catch(err){
                console.log(`${err} Unable to get profile data`)
            }

        })()
    },[])
  return (
    <div className="flex flex-row justify-center items-center lg:mt-52 mt-32  ">
      <div className="shadow-lg  p-5 m-5 lg:w-1/3 bg-blue-600  w-full">
        <div>
          <h1 className="text-3xl  text-black border-b p-2">Profile Info</h1>
        </div>
        <div className="flex flex-col w-full flex-wrap mt-4">
        <div className="flex flex-row w-full flex-wrap items-center justify-center">
                <i className="fas fa-user-circle text-8xl text-blue-500"></i>
        </div>
          <div className="flex flex-row w-full flex-wrap">
            <div className="flex flex-col w-full">
              <label className="px-2">Name </label>
              <input type="text" defaultValue={name} className=" p-5 m-2" />
            </div>
          </div>
          <div className="flex flex-row w-full flex-wrap">
            <div className="flex flex-col w-full">
              <label className="px-2"> Email </label>
              <input type="text" defaultValue={email} className=" p-5 m-2" />
            </div>
          </div>
          <div className="flex flex-row w-full flex-wrap">
            <div className="flex flex-col w-full">
              <label className="px-2"> Password </label>
              <input type="password" defaultValue={password} className=" p-5 m-2" />
            </div>
          </div>
          <div className="flex flex-row w-full items-center justify-center flex-wrap">
            <div className="flex flex-col  w-72">
            <Button
          text="UPDATE"
          nameClass="bg-blue-500 text-white text-2xl p-4 mt-4 shadow-md"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
