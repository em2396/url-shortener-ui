import React from 'react';
import './UrlContainer.css';
import SingleURL from '../SingleURL/SingleURL'

const UrlContainer = ({urls}) => {
  const urlEls = urls.map(url => {
    return (
      <SingleURL 
        id={url.id}
        long_url={url.long_url}
        short_url={url.short_url}
        title={url.title}
        key={url.id}
      />
    )
  });

  return (
    <section className='url-container'>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;

