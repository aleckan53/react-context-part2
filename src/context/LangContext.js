import React, { useState, useLayoutEffect } from 'react';

const LangContext = React.createContext({
  lang: '',
  currentLangData: {},
  switchLang: () => {},
});

export default LangContext;

export function LangProvider (props) {

  const [lang, setLang] = useState(window.localStorage.getItem('appUILang') || window.navigator.language);
  

  useLayoutEffect(() => {
    const selectedLang = window.localStorage.getItem('appUILang');

    if (selectedLang) {
      setLang(selectedLang);
    } 
  }, [lang])

  const switchLang = (ln) => {
    setLang(ln);
    window.localStorage.setItem('appUILang', ln);
  };

  return (
    <LangContext.Provider value={{
      lang, 
      switchLang, 
      currentLangData: langData[lang]
    }}>
      {props.children}
    </LangContext.Provider>
  );
};

const langData = {
  'en-US': {
    card: {
      title: 'Title',
      genre: 'Genre',
      date: 'Release date',
      description: 'Description',
      link: 'Read more',
    },
    app: {
      h1: 'Select Language'
    },
  },
  'es-ES': {
    card: {
      title: 'Título',
      genre: 'Género',
      date: 'Estreno',
      description: 'Descripción',
      link: 'Lee mas',
    },
    app: {
      h1: 'Cambiar de idioma'
    },
  },
  'ru-RU': {
    card: {
      title: 'Название',
      genre: 'Жанр',
      date: 'Дата премьеры',
      description: 'Описание',
      link: 'Читать подробно',
    },
    app: {
      h1: 'Изменить язык'
    },
  },
}