import { useReducer } from 'react';
import { LanguageDispatchContext, LanguageContext, initialState } from './languageContext';

//Estado inicial y funcion reducer
import { languageReducer } from './languageReducer';

export const LanguageProvider = ({ children }) => {

 const [state, dispatch] = useReducer(languageReducer, initialState);

 return (
   <LanguageContext.Provider value={state}>
     <LanguageDispatchContext.Provider value={dispatch}>
       {children}
     </LanguageDispatchContext.Provider>
   </LanguageContext.Provider>
 )
}