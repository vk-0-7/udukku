import {userReducer} from './userReducer';
import { combineReducers } from "redux";
import { ProfessionalInfoReducer } from './ProfessionalInfoReducer';
import { PersonalInfoReducer } from './PersonalInfoReducer';
import { jobReducer } from './jobReducer';

  const rootReducer = combineReducers({
      user : userReducer,
      personal: PersonalInfoReducer,
      professional: ProfessionalInfoReducer,
      jobs: jobReducer
})

export default rootReducer;