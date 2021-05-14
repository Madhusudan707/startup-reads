import "../../styles/ok.css";
export const Toast = ({ msg, msgDel,isHide }) => {
  return (
    <div className={`toast-main ${isHide}`}>
      <span className={`toast t-success `} style={{ background: msgDel }}>
        {msg}
      </span>
    </div>
  );
};


