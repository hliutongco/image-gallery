class ImageCard {
  constructor({ urls, id }){
    this.urls = urls
    this.id = id
  }

  render(){
    const imageCard = document.createElement('div')
    imageCard.innerHTML = `<img class="image-card" data-id=${this.id} src=${this.urls.thumb}/>`
    return imageCard
  }
}
