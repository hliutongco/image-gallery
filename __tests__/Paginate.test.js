const {Paginate} = require('../app/classes/Paginate.js')

describe('Create Paginate object', () => {
  const data = []
  for(let i = 0; i < 20; i++){
    data.push({id: i})
  }

  const newPaginateObj = new Paginate(data)

  test('Should create an array of all cards', () => {
    expect(Array.isArray(newPaginateObj.allCards)).toBe(true);
  })

  test('changeCurrentPage() should change the currentPage value of the object', () => {
    newPaginateObj.changeCurrentPage(2)
    expect(newPaginateObj.currentPage).toBe(2)
  })

  test('returnCardArray() should return different arrays when page is changed', () => {
    const array1 = newPaginateObj.returnCardArray()
    newPaginateObj.changeCurrentPage(1)
    const array2 = newPaginateObj.returnCardArray()
    expect(array1).not.toEqual(array2)
  })

  test('renderPaginatedMenu() should return span elements', () => {
    const parentNode = document.createElement('div')
    parentNode.append(document.createElement('span'))

    const paginationDiv = newPaginateObj.renderPaginatedMenu(parentNode)
    expect(paginationDiv.children).toHaveLength(newPaginateObj.allCards.length)
  })

})
