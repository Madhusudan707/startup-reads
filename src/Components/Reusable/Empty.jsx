export const Empty = ({ imageSrc, nameClass, altText,text, h1Class }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className={h1Class}>
        {text}
      </h1>
     
     
      <img src={`/images/${imageSrc}`} className={nameClass} alt={altText} />
    </div>
  );
};
