import React from 'react'
import {useLanguage} from '../context/languageContext';

import { idiom } from '../App'

const Card = () => {

  const { language } = useLanguage()

  return (
    <div style={{border:"1px solid #000"}}>
      <h2>{idiom.dictionary[language].title}</h2>
    </div>
  )
}

export default Card