import {useWidget} from '../../contexts'

export const SelectLanguage = ({ mainClass, selectClass, changeFunction }) => {
    const {toggleLanguage} = useWidget()
  return (
    <div className={`${toggleLanguage} flex-row  text-black fixed lg:top-28 lg:bottom-3/4  lg:left-44 lg:w-52 bottom-16  w-full`}>
      <select onChange={changeFunction} className={`${selectClass}  w-96  bg-white border lg:p-4 p-5  `}>
        <option value="en" defaultValue>
          ENGLISH
        </option>
        <option value="hi">हिंदी</option>
      </select>
    </div>
    
  );
};
