import "../../styles/ok.css";
export const Toast = ({ msg,isHide,toastClass="flex",bgColor }) => {
  return (
    <div className={`toast-main ${isHide} ${toastClass} justify-center items-center `}>
      <span className={`toast`} style={{background:bgColor}}>
        {msg}
      </span>
    </div>
  );
};


