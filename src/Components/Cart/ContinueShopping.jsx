import { Link } from "react-router-dom";
import { HOME} from "../../routing/paths"
import {useLanguage} from '../../contexts'

export const ContinueShopping = ({nameClass}) => {
  const {languageState} = useLanguage()
  return (
    <>
      <Link to={HOME} className={nameClass}>
        <i className="fas fa-arrow-circle-left self-center">
        &nbsp;{languageState.data.continue_shopping||"Continue Shopping"} 
        </i>
      </Link>
    </>
  );
};
