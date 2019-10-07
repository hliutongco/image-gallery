// this method sends a fetch request to a server hosted on Google App Engine
// this server handles requests to an external image API (Unsplash)

const getImageObjs = async () => {
  try {
    const fetchPromiseObj = await axios.get('http://my-image-gallery-254305.appspot.com/', {
      method: 'GET',
      headers: {
        "Access-Control-Allow-Origin": '*'
      }
    })

    return await fetchPromiseObj.data
  }
  catch(e) {
    console.log('Error!', e);
  }
}

if (typeof exports !== 'undefined') {
  module.exports = {
      getImageObjs
  }
}
