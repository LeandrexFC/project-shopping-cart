const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem')

describe('3 - Teste a função saveCartItems', () => {
  it('Espera que local storage seja chamado', () => {
    saveCartItems('cartItem');
    expect(localStorage.setItem).toHaveBeenCalled()
  })
  it('Espera que local storage seja chamado', () => {
    saveCartItems('cartItem');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', 'cartItem')
  })
});
