import { Button, Heading, Close,Logo } from "../";
import './modal.css'
import {useLanguage} from '../../../contexts'
export const Invoice = () => {
    const {languageState} = useLanguage()
    const printHandler=()=>window.print()
        
    

  return (
    <div  id="invoice" className="modal w-full flex flex-col items-center justify-center z-10 " >
      <div className=" flex flex-col items-center justify-center border w-full p-8 bg-yellow-400 ">
        <Close nameClass="text-white hover:text-red-500 text-3xl no-print" />
        <Heading text= {languageState.data.invoice||"FAKE INVOICE"}   nameClass="no-print text-center text-3xl lg:text-4xl text-white mb-5 pt-5" />
        <div className='border p-16'>
        <div className='flex flex-col w-96 '>
            <div className='flex flex-row w-96 justify-between text-3xl  py-2'>
                <Logo nameClass='rounded-full w-24 h-24 border-2' />
                <span>{languageState.data.invoice||"Invoice"}</span>
            </div>
            <div className='flex flex-row w-96 justify-between text-2xl py-2'>
                <span>Hello Maddy</span>
                <span>ORDER #00302</span>
            </div>
            <div className='flex flex-row w-96 justify-between text-1xl py-2 border-b'>
                <span>{languageState.data.thank_you_for_your_order||"Thank you for your order."}</span>
                <span>{languageState.data.date||"May 11, 2021"}</span>
            </div>
            <div className='flex flex-row w-96 justify-around text-1xl py-2  border-b'>
                <span>{languageState.data.items||"Items"}</span>
                <span>{languageState.data.items||"Items"} ID</span>
                <span>{languageState.data.quantity||"Quantity"}</span>
                <span>{languageState.data.subtotal||"Subtotal"}</span>
            </div>
            <div className='flex flex-row w-96 justify-between text-1xl py-2'>
                <span>{languageState.data.name_of_item||"Name of Item"}</span>
                <span>{languageState.data.items||"Items"} ID</span>
                <span>1</span>
                <span><i className="fas fa-rupee-sign"></i> 250</span>
            </div>
            <div className='flex flex-row w-96 justify-end text-1xl py-2'>
                <span className='px-2'>{languageState.data.subtotal||"Subtotal"}</span>
                <span><i className="fas fa-rupee-sign"></i> 250</span>
            </div>
            <div className='flex flex-row w-96 justify-end text-1xl py-2' >
                <span className='px-2'>{languageState.data.shipping_and_handling||"SHIPPING & HANDLING"}</span>
                <span><i className="fas fa-rupee-sign"></i> 60</span>
            </div>
            <div className='flex flex-row w-96 justify-end text-1xl py-2'>
                <span className='px-2'>{languageState.data.gst||"GST"} (5%)</span>
                <span><i className="fas fa-rupee-sign"></i>15</span>
            </div>
            <div className='flex flex-row w-96 justify-end text-1xl py-2 border-t border-b'>
                <span className='px-2'>{languageState.data.total||"Total"}</span>
                <span><i className="fas fa-rupee-sign"></i>325</span>
            </div>
            <div className='flex flex-col font-bold py-2' >
                <span>{languageState.data.billing_information||"BILLING INFORMATION"}</span>
                <span>MADDY</span>
                <span>H.NO - ABC  SONARI JAMSHEDPUR</span>
                <span>JHARKHAND, INDIA</span>
            </div>
            <div className='flex justify-center items-center -2 border-t'>
            <Button
          text="PRINT"
          nameClass="no-print bg-blue-500 text-white p-4 mt-4 shadow-md text-2xl hover:bg-gray-600"
          btnFunction={printHandler}
        />
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};
