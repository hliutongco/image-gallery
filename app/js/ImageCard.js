class ImageCard {
  constructor({ urls, id }){
    this.urls = urls
    this.id = id
  }

  render(){
    const imageCard = document.createElement('img')
    imageCard.className = "image-card"
    imageCard.dataset.id = this.id
    imageCard.src = this.urls.small
    return imageCard
  }
}
