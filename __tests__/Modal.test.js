const {Modal} = require('../app/js/Modal.js')

describe('Create Modal object', () => {
  const data = {
    urls: {
      regular: "https://images.unsplash.com/photo-1570280407069-9017ba84a3a2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjkzNTk2fQ"
    }
  }

  const newModal = new Modal(data)

  test('Should create an instance of Modal', () => {
    expect(newModal instanceof Modal).toBe(true);
  })

  test('render() should return a string', () => {
    expect(typeof newModal.render()).toBe("string")
  })

})
