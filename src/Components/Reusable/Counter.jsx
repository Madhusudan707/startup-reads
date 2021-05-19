import { Button, Loader } from "./";
import { useCounterHandler } from "../../hooks";

export const Counter = ({ itemCount, pid }) => {
  const { counterHandler, btnDisable, counterLoading } = useCounterHandler();

  return (
    <div className="flex flex-row items-center justify-around border-double border-4   border-gray-400 shadow-md">
      <Button
        isDisabled={btnDisable}
        nameClass="bg-gray-400 h-8 w-8 text-white font-bold text-2xl shadow-md flex items-center justify-center"
        text="-"
        btnFunction={() => {
          counterHandler({ itemCount, incDec: "-", pid });
        }}
      />
      <span className=" text-black font-bold   px-2 ">
        {itemCount}
      </span>
      <Button
        text="+"
        nameClass="bg-gray-400  h-8 w-8 text-white font-bold text-2xl shadow-md flex items-center justify-center"
        btnFunction={() => {
          counterHandler({ itemCount, incDec: "+", pid });
        }}
      />
      <Loader toggle={counterLoading ? "opacity-50" : "opacity-0"} />
    </div>
  );
};
