const fetchProducts = async (product) => {
  try {
    const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`);
    const response = await request.json();
    const finalResults = response;
    return finalResults;
  } catch (error) {
    if (!product) {
     throw new Error('You must provide an url');
   }
  }
};

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
