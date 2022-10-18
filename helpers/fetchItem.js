const fetchItem = async (event) => {
  try { 
    const request = await fetch(`https://api.mercadolibre.com/items/${event}`);
    const response = await request.json();
    return response;
  } catch (error) {
    if (!event) {
     throw new Error('You must provide an url');
   }
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
