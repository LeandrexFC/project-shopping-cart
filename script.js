// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 
// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */

const productList = document.querySelector('.cart__items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */

const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

const cartItemClickListener = (event) => {
  const listTarget = event.target;
  listTarget.remove();
  saveCartItems(productList.innerHTML);
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const productAddList = (product) => {
  const cartProduct = createCartItemElement(product);
  productList.appendChild(cartProduct);
  saveCartItems(productList.innerHTML);
};

const removeCartProducts = () => {
  productList.innerText = '';
};

const clearTarget = () => {
  const child = productList.childNodes;
  child.forEach((elements) => {
    elements.addEventListener('click', cartItemClickListener);
  });
};

const emptyButton = () => {
  const classButton = document.querySelector('.empty-cart');
  classButton.addEventListener('click', removeCartProducts);
};

const renderStorage = () => {
  if (getSavedCartItems() !== null) {
    const takeSavedItems = getSavedCartItems();
    productList.innerHTML = takeSavedItems;
    emptyButton();
  }
};

const buttonTarget = async (event) => {
  const alvo = event.target;
  const paiDoAlvo = alvo.parentNode;
  const filhodoAlvo = paiDoAlvo.firstChild;
  const results = await fetchItem(filhodoAlvo.innerText);
  productAddList(results);
};

const setupHTML = () => {
  const button = document.querySelectorAll('.item__add');
  button.forEach((elements) => elements.addEventListener('click', buttonTarget));
};

const showProducts = (products) => {
  const items = document.querySelector('.items');
  products.forEach((elements) => {
    const resultsSection = createProductItemElement(elements);
    items.appendChild(resultsSection);
  });
};

const showLoadingMessage = () => {
  const header = document.querySelector('.items');
  const divMessage = document.createElement('p');
  divMessage.className = 'loading';
  divMessage.innerText = 'carregando...';
  header.appendChild(divMessage);
};

const removeLoadingMessage = () => {
  const carregando = document.querySelector('.loading');
  carregando.innerHTML = '';
  carregando.remove();
};

const renderApi = async () => {
  const products = await fetchProducts('computador');
  removeLoadingMessage();
  showProducts(products.results);
};

window.onload = async () => {
  showLoadingMessage();
  await renderApi();
  setupHTML();
  emptyButton();
  renderStorage();
  clearTarget();
};
