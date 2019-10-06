class Paginate {
  constructor(data){
    this.allCards = this.paginateCards(data)
    this.currentPage = 1
  }

  // this method creates a series of arrays nested within an array
  // here the images are paginated into chunks of 10
  paginateCards(data){
    const arrayOfCardArrays = []
    for(let i = 0; i < data.length; i+=10){
      arrayOfCardArrays.push(data.slice(i, i+10))
    }
    return arrayOfCardArrays
  }

  changeCurrentPage(pageNum){
    // this conditional stops the page from changing if the pageNum is out of range
    if(pageNum < 1 || pageNum > this.allCards.length) return
    this.currentPage = pageNum
  }

  returnCardArray(){
    return this.allCards[this.currentPage - 1]
  }

  renderPaginatedMenu(){
    const pages = document.getElementById('page-numbers')
    const maxPage = this.allCards.length

    // this loop builds the menu for the paginated images
    // page starts at 2 because the menu always has at least 1 page
    for(let page = 2; page <= maxPage; page++){
      const newPage = document.createElement('span')
      newPage.innerText = ` ${page} `
      pages.append(newPage)
    }

    const cardsToRender = this.returnCardArray()
    return cardsToRender

  }
}
