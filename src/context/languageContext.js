import { createContext, useContext } from 'react';

/**
 * @type {{ language: "ES" | "EN" }}
 */
export const initialState = {
   language:"ES"
}; 

export const LanguageContext = createContext(initialState)

export const LanguageDispatchContext = createContext(() => {});

export const useLanguage = () => {
   return useContext(LanguageContext);
}

export const useLanguajeDispatch = () => {
   return useContext(LanguageDispatchContext);
}