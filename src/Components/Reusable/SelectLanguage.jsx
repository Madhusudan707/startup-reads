

export const SelectLanguage = ({mainClass,selectClass,changeFunction}) => {
    return (
        <div className='bg-white text-black'>
            <select onChange={changeFunction} className={selectClass}>
                <option value='en' defaultValue>ENG</option>
                <option value='hi'>हिंदी</option>
            </select>
        </div>
    )
}
