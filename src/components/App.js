import React, { useState, useEffect, useContext } from 'react';

import LangSwitch from './LangSwitch';
import Card from './Card';

import { fetchMock } from '../apiMock';
import LangContext from '../context/LangContext';

function App() {
  const [state, setState] = useState([]);

  const { lang, currentLangData } = useContext(LangContext);
  useEffect(() => {
    fetchMock(lang)
      .then(setState)
  }, [lang]);

  return (
    <div className="App">
      <h1>{currentLangData.app.h1}</h1>
      <LangSwitch/>
      <div className='Cards'>
        {state.map((item, idx) => <Card key={idx} data={item}/>)}
      </div>
    </div>
  );
}

export default App;
