import React from "react";
import "./toast.css";
const Toast = ({ toggle, msg }) => {
  return (
 
      <div className="toast_main">
        <span className="toast t-success">{msg}</span>
       
      </div>
     
  
  );
};

export default Toast;
