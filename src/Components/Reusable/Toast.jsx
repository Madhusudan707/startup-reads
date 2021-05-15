import "../../styles/ok.css";
export const Toast = ({ msg,isHide,toastClass,bgColor }) => {
  return (
    <div className={`toast-main ${isHide} flex justify-center items-center `}>
      <span className={`toast`} style={{background:bgColor}}>
        {msg}
      </span>
    </div>
  );
};


