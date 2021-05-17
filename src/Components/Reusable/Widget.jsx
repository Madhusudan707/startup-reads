import {Sort,Filter,Search,SelectLanguage} from '.'
import {useLanguage} from '../../contexts'
import {useWidgetHandler,useLanguageHandler} from '../../hooks'
export const Widget = () => {
    const {languageHandler} = useLanguageHandler()
    const {languageState} = useLanguage()
    const {toggleSearchHandler,toggleLanguageHandler,toggleFilterHandler,toggleSortHandler} = useWidgetHandler()
    return (
        <>
        <div className='flex flex-row fixed top-28    p-2  text-white bg-blue-200 justify-between items-center  w-48 h-14  rounded-lg z-10 hover:bg-blue-400'>
            <i className="fas fa-search fa-2x cursor-pointer" onClick={toggleSearchHandler}></i>
            <i className="fas fa-language fa-2x cursor-pointer" onClick={toggleLanguageHandler}></i>
            <i title={languageState.data.filter || "Clear"} className="fas fa-filter fa-2x cursor-pointer" onClick={toggleFilterHandler}></i>
            <i title={languageState.data.sort || "Clear"} className="fas fa-sort fa-2x cursor-pointer" onClick={toggleSortHandler}></i>
        </div>
        <Search/>
        <SelectLanguage changeFunction={(e)=>{languageHandler(e)}} selectClass="p-4"/>
        <Filter/>
        <Sort/>
        </>
        
    )
}
