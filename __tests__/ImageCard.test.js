const {ImageCard} = require('../app/classes/ImageCard.js')

describe('Create ImageCard object', () => {
  const data = {
    id: 2,
    urls: {
      small: "https://images.unsplash.com/photo-1570280407069-9017ba84a3a2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjkzNTk2fQ"
    }
  }

  const newImage = new ImageCard(data)

  test('Should create an instance of ImageCard', () => {
    expect(newImage instanceof ImageCard).toBe(true);
  })

  test('render() should return an image object with correct src URL', () => {
    expect(newImage.render().src).toBe(data.urls.small)
  })

  test('render() should return an image object with correct class name', () => {
    expect(newImage.render().className).toBe("image-card")
  })

})
