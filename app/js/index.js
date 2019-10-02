const getImageCards = async () => {
  const data = await getImageObjs()
  return data.map(obj => new ImageCard(obj))
}

const paginateCardsOnPageLoad = (imageCards) => {
  const paginatedImageCards = new Paginate(imageCards)
  return paginatedImageCards
}

const setUpPaginationMenu = (paginatedImageCards) => {
  document.getElementById('pagination').addEventListener('click', (event) => {
    if(event.target.className === "page_number"){
      const pageNum = event.target.innerText
      paginatedImageCards.changeCurrentPage(parseInt(pageNum))
      renderCards(paginatedImageCards.returnCardArray())
      window.history.pushState("", "", `/${[pageNum]}`);
    }
    else if (event.target.className === "pageButton") {
      const currentPage = paginatedImageCards.currentPage
      event.target.id === "button_next" ? paginatedImageCards.changeCurrentPage(currentPage + 1) : paginatedImageCards.changeCurrentPage(currentPage - 1)
      renderCards(paginatedImageCards.returnCardArray())
      window.history.pushState("", "", `/${[paginatedImageCards.currentPage]}`);
    }
  })
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

const setUpModalEventListener = (imageCards) => {
  const imageContainer = document.getElementById('image-container')
  imageContainer.addEventListener('click', (event) => {
    if(event.target.className === "image-card"){
      const foundImageData = imageCards.find((obj) => obj.id === event.target.dataset.id)
      const imageModal = new Modal(foundImageData)
      const modalContainer = document.getElementById('modal-container')
      modalContainer.innerHTML = imageModal.render()
    }
  })
}

const setUpModalClose = () => {
  const modalContainer = document.getElementById('modal-container')
  modalContainer.addEventListener('click', (event) => {
    if(event.target.type === "submit"){
      while (modalContainer.firstChild) {
        modalContainer.removeChild(modalContainer.firstChild);
      }
    }
  })
}

const runner = async () => {
  const imageCards = await getImageCards()
  const paginatedImageCards = paginateCardsOnPageLoad(imageCards)
  paginatedImageCards.renderPaginatedMenu()
  setUpPaginationMenu(paginatedImageCards)
  renderCards(paginatedImageCards.returnCardArray())
  setUpModalEventListener(imageCards)
  setUpModalClose()
}

runner()
