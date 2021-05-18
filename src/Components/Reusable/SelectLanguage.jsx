import {useWidget} from '../../contexts'

export const SelectLanguage = ({ mainClass, selectClass, changeFunction }) => {
    const {toggleLanguage} = useWidget()
  return (
    <div className={`${toggleLanguage} flex-row  text-black fixed  lg:top-28 lg:mt-0 top-3/4 mt-20    lg:left-12 lg:w-52   w-full`}>
      <select onChange={changeFunction} className={`${selectClass} lg:w-96 w-full  bg-white border lg:p-4 p-5  `}>
      <option value="en" defaultValue>
          SELECT LANGUAGE
        </option>
        <option value="en" >
          ENGLISH
        </option>
        <option value="hi">हिंदी</option>
      </select>
    </div>
    
  );
};
