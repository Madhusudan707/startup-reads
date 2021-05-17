import {Sort,Filter,Search,SelectLanguage} from '.'
import {useLanguage} from '../../contexts'
import {useWidgetHandler,useLanguageHandler} from '../../hooks'
export const Widget = () => {
    const {languageHandler} = useLanguageHandler()
    const {languageState} = useLanguage()
    const {toggleSearchHandler,toggleLanguageHandler,toggleFilterHandler,toggleSortHandler} = useWidgetHandler()
    return (
        <>
        <div className='flex flex-row fixed lg:top-24 lg:mt-3 bottom-0 p-2  text-white bg-blue-400 lg:justify-between justify-around items-center  lg:w-48 w-full lg:h-14 h-16  lg:rounded-lg z-10 '>
            <i className="fas fa-search  cursor-pointer lg:text-2xl text-3xl" onClick={toggleSearchHandler}></i>
            <i className="fas fa-language cursor-pointer lg:text-2xl text-3xl" onClick={toggleLanguageHandler}></i>
            <i title={languageState.data.filter || "Clear"} className="fas fa-filter  cursor-pointer lg:text-2xl text-3xl" onClick={toggleFilterHandler}></i>
            <i title={languageState.data.sort || "Clear"} className="fas fa-sort cursor-pointer lg:text-2xl text-3xl" onClick={toggleSortHandler}></i>
        </div>
        <Search/>
        <SelectLanguage changeFunction={(e)=>{languageHandler(e)}} selectClass="p-4"/>
        <Filter/>
        <Sort/>
        </>
        
    )
}
