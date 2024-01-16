 const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
    .then(response => {
      if(!response.ok) {
        console.log('error') 
      }
      return response.json();
    })
}


function postUrls(addedUrl) {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(addedUrl)
  })
  .then(response => {
    if(response.ok) {
      return response;
    } else {
      console.log('error in posting')
    }
  })
  .then(response => response.json());
}

export { getUrls, postUrls}