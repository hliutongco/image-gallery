class ImageCard {
  constructor({ alt_description, urls }){
    this.alt = alt_description
    this.urls = urls
  }

  render(){
    const imageCard = document.createElement('div')
    imageCard.className = "image-card"
    imageCard.innerHTML = `<img src=${this.urls.thumb}/>`

    return imageCard
  }
}
