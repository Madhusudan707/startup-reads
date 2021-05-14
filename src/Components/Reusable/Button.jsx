
export const Button = ({nameClass,btnFunction,text,isDisable,isHide}) => {
    return (
        <button className={nameClass} onClick={btnFunction}>{text}</button>
    )
}
