class Modal {
  constructor({ urls }){
    this.urls = urls
  }

  render(){
    return `
      <div id="image-modal">
        <img alt=${this.alt} src=${this.urls.regular}/>
        <button id="close-button">X</button>
      </div>
    `
  }
}
