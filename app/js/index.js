Adapter.getImageObjs()
.then(data => {
  const imageContainer = document.getElementById('image-container')
  data.forEach((obj) => {
    const newImage = new ImageCard(obj)
    imageContainer.append(newImage.render())
  })
})
