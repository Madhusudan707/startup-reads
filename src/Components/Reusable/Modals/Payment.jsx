import { Button, Heading, Close, Invoice } from "../";
import {useLanguage} from '../../../contexts'
export const Payment = () => {

  const {languageState} = useLanguage()
  return (
      <>
    <div
      id="payment"
      className="modal w-full flex flex-col items-center justify-center z-10"
    >
      <div className=" flex flex-col items-center justify-center border w-full p-16 bg-yellow-400 ">
        <Close nameClass="text-white hover:text-red-500 text-3xl" />

        <Heading
          text={languageState.data.payment||"FAKE PAYMENT"}
          nameClass="text-center text-3xl lg:text-4xl text-white mb-5 pt-5 "
        />
      
        <div className="flex flex-col w-full flex-wrap">
         
          <div className="flex flex-row w-full flex-wrap">
         
            
           </div>
          <div className="flex flex-row w-full flex-wrap">
            <div className='flex flex-col w-full'>
              <label className='px-2'>{languageState.data.name||"Name"} </label>
              <input type="text" placeholder="MADHUSUDAN DAS"  className=" p-5 m-2" disabled />
            </div>
           
          </div>
          <div className="flex flex-row w-full flex-wrap">
          <div className='flex flex-col w-full'>
              <label className='px-2'> {languageState.data.card_number||"Card Number"}  </label>
              <input type="text" placeholder='6759 6498 2643 8453'   className=" p-5 m-2" disabled />
            </div>
           

          </div>
          <div className="flex flex-row w-full flex-wrap">
          <div className='flex flex-col'>
              <label className='px-2'>{languageState.data.expiration_date||"Expiration (mm/yy)"}  </label>
              <input type="text" placeholder="05/2024"  className="w-72 p-5 m-2" disabled />
            </div>
            <div className='flex flex-col'>
              <label className='px-2'>{languageState.data.security_code||"Security Code"}  </label>
              <input type="text" placeholder="123" className="w-72 p-5 m-2" disabled />
            </div>
            
           
          </div>
        </div>

       <a href='#invoice'> <Button
          text={languageState.data.make_payment||"MAKE PAYMENT"}
          nameClass="bg-blue-500 text-white p-4 mt-4 shadow-md hover:bg-gray-600"
        /></a>
      </div>
    </div>
    <Invoice/>
    </>
  );
};
