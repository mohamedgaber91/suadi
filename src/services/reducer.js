import { combineReducers } from 'redux';
import { reducer as uiReducer } from './ui/reducer';
//import { reducer as sessionReducer } from './session/reducer';
// import { reducer as configReducer } from './config/reducer';

export const reducer = combineReducers({
    ui: uiReducer,
    //session: sessionReducer,
    //config: configReducer,
});