import React from 'react'
import { useLanguajeDispatch } from '../context/languageContext';


const Nabvar = () => {

  const languajeDispatch =  useLanguajeDispatch()


  const handleChangeIdiom = (text) => () => {

   languajeDispatch({type:"CHANGE_LANGUAGE", payload:text})

  } 


  return (
    
    <div>

      <button onClick={handleChangeIdiom("EN")} >
          Ingles
      </button>
     
      <button onClick={handleChangeIdiom("ES")}>
         Español
      </button>

    </div>
  )
}

export default Nabvar