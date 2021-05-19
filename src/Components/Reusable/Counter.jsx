import { Button, Loader } from "./";
import { useCounterHandler } from "../../hooks";

export const Counter = ({ itemCount, pid }) => {
  const { counterHandler, btnDisable, counterLoading } = useCounterHandler();

  return (
    <div className="flex flex-row items-center justify-around">
      <Button
        isDisabled={btnDisable}
        nameClass="bg-blue-400 rounded-full h-8 w-8 text-white font-bold text-2xl flex items-center justify-center"
        text="-"
        btnFunction={() => {
          counterHandler({ itemCount, incDec: "-", pid });
        }}
      />
      <span className="border-4 bg-red-500 text-white font-bold   px-2 ">
        {itemCount}
      </span>
      <Button
        text="+"
        nameClass="bg-blue-400 rounded-full h-8 w-8 text-white font-bold text-2xl flex items-center justify-center"
        btnFunction={() => {
          counterHandler({ itemCount, incDec: "+", pid });
        }}
      />
      <Loader toggle={counterLoading ? "opacity-50" : "opacity-0"} />
    </div>
  );
};
