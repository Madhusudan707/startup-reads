import React from "react";
import Button from '../Button/Button'
import './options.css'
const Options = ({ func,heading,type,name,label1,label2,cardClass,value1,value2,btnFunc }) => {
  return (
    <div className="options-main">
      <div className={`options-card ${cardClass}`}>
        <h2>{heading}</h2>
        <p>
          <label>
            <input type={type} name={name} onClick={func} value={value1} />
            {label1}
          </label>
          <label>
            <input type={type} name={name} onClick={func}  value={value2}/>
            {label2}
          </label>
        </p>
        <Button btnClass="btn btn-default" text="CLEAR" btnFunc={btnFunc}/>
      </div>
    </div>
  );
};

export default Options;
