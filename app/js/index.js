const getImageCards = async () => {
  const data = await getImageObjs()
  return data.map(obj => new ImageCard(obj))
}

const renderCards = (cards) => {
  const imageContainer = document.getElementById('image-container')

  // clear all existing elements
  while (imageContainer.firstChild) {
    imageContainer.removeChild(imageContainer.firstChild);
  }

  cards.forEach((card) => {
    imageContainer.append(card.render())
  })
}

const paginateCardsOnPageLoad = async () => {
  const imageCards = await getImageCards()
  const paginatedImageCards = new Paginate(imageCards)
  return paginatedImageCards
}

const renderPaginatedCards =  async () => {
  const paginatedImageCards = await paginateCardsOnPageLoad()

  const nextButton = document.getElementById('button_next')
  const maxPage = paginatedImageCards.allCards.length

  for(let page = maxPage; page > 1; page--){
    const newPage = document.createElement('span')
    newPage.className = "page_number"
    newPage.innerText = ` ${page} `
    nextButton.prepend(newPage)
  }

  document.getElementById('pagination').addEventListener('click', (event) => {
    if(event.target.className === "page_number"){
      const pageNum = event.target.innerText
      paginatedImageCards.changeCurrentPage(parseInt(pageNum))
      renderCards(paginatedImageCards.returnCardArray())
      window.history.pushState("", "", `/${[pageNum]}`);
    } else if (event.target.className === "pageButton") {
      const currentPage = paginatedImageCards.currentPage
      event.target.id === "button_next" ? paginatedImageCards.changeCurrentPage(currentPage + 1) : paginatedImageCards.changeCurrentPage(currentPage - 1)
      renderCards(paginatedImageCards.returnCardArray())
      window.history.pushState("", "", `/${[paginatedImageCards.currentPage]}`);
    }
  })

  const cardsToRender = paginatedImageCards.returnCardArray()
  return cardsToRender

}


const runner = async () => {
  const cards = await renderPaginatedCards()

  renderCards(cards)
}

runner()
