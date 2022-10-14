const fetchProducts = async (product) => {
const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`);
  const response = await request.json();
  const finalResults = response;

  if (!product) {
    Error('You must provide an url');
  }

  return finalResults;
};

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
