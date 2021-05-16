import {useWidget} from '../../contexts'

export const SelectLanguage = ({ mainClass, selectClass, changeFunction }) => {
    const {toggleLanguage} = useWidget()
  return (
    <div className={`${toggleLanguage} flex-row  text-black fixed top-36 left-12   w-full`}>
      <select onChange={changeFunction} className={`${selectClass}  w-96  bg-white border `}>
        <option value="en" defaultValue>
          ENGLISH
        </option>
        <option value="hi">हिंदी</option>
      </select>
    </div>
    
  );
};
