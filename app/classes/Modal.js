class Modal {
  constructor({ urls }){
    this.urls = urls
  }

  render(){
    return `
      <div id="image-modal">
        <div>
          <img src=${this.urls.regular}/>
        </div>
        <button id="close-button">click to close</button>
      </div>
    `
  }
}

if (typeof exports !== 'undefined') {
  module.exports = {
    Modal
  }
}
