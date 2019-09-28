fetch('http://my-image-gallery-254305.appspot.com/', {
  method: 'GET',
  headers: {
    "Access-Control-Allow-Origin": '*'
  }
})
.then(res => res.json())
.then(console.log)
