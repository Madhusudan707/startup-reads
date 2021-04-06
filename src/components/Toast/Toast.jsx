import React from "react";
import "./toast.css";
const Toast = ({ toggle, msg, msgDel }) => {
  return (
    <div className="toast_main">
      <span className="toast t-success" style={{ background: msgDel }}>
        {msg}
      </span>
    </div>
  );
};

export default Toast;
