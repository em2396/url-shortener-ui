import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls, postUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

function App () {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    getUrls()
      .then(data => {
        const newData = data.urls;
        setUrls(newData);
      })
  }, [])

  function addNewUrl(newUrl) {
    postUrls(newUrl)
      .then(data => {
        setUrls([...urls, data]);
      })
  }

  return (
    <main className="App">
      <header>
        <h1 className="title">URL Shortener</h1>
      </header>
      <UrlForm addNewUrl={addNewUrl}/>
      <UrlContainer urls={urls}/>
    </main>
  );
}

export default App;
