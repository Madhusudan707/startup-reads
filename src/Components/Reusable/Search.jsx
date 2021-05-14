import { useSearchHandler } from "../../hooks";
import {useLanguage} from '../../contexts'

export const Search = ({nameClass}) => {
    const { searchHandler } = useSearchHandler();
    const {languageState} = useLanguage()
    return (
        <div className="flex flex-row justify-center lg:justify-start w-full">
            <input className="w-96  p-4  text-center lg:w-full" type='search' placeholder={languageState.data.search || 'Search your Books'}  onChange={(e) => {
            searchHandler(e.target.value);
          }}/>
        </div>
       
    )
}
