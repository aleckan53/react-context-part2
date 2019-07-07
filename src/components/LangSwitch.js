import React, { useContext } from 'react';
import LangContext from '../context/LangContext';

export default function LangSwitch() {

  const { switchLang, lang } = useContext(LangContext);

  return (
    <div className='LangSwitch'>
      <button 
        className={lang === 'en-US' ? 'active' : ''}
        onClick={() => switchLang('en-US')}>EN</button>
      <button 
        className={lang === 'es-ES' ? 'active' : ''}
        onClick={() => switchLang('es-ES')}>ES</button>
      <button 
        className={lang === 'ru-RU' ? 'active' : ''}
        onClick={() => switchLang('ru-RU')}>RU</button>
    </div>
  )
}