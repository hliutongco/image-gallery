const getImageObjs = async () => {
  try {
    const fetchPromiseObj = await fetch('http://my-image-gallery-254305.appspot.com/', {
      method: 'GET',
      headers: {
        "Access-Control-Allow-Origin": '*'
      }
    })

    return await fetchPromiseObj.json()
  }
  catch(e) {
    console.log('Error!', e);
  }
}
