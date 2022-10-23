const saveCartItems = (product) => {
  const storageCart = localStorage.setItem('cartItems', product);
  return storageCart;
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
