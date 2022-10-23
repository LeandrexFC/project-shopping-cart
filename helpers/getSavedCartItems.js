const getSavedCartItems = () => {
  const savedProduct = localStorage.getItem('cartItems');
  return savedProduct;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
