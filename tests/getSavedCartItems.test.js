const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('testa se o localStorage é chamado', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalledTimes(1)
  })
  it('testa se o localStorage é chamado', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems')
  })
});
