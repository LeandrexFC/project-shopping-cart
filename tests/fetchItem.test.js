require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Teste se fetch item é um função', () => {
    expect(typeof fetchItem).toBe('function')
  })
  it('Teste se a fetch foi chamada', async () => {
    expect.assertions(1)
    await fetchItem("MLB1615760527")
    expect(fetch).toHaveBeenCalled();
  })
  it('Teste se fetch item retorna o endopoint correto', async () => {
    expect.assertions(1)
    expect(await fetchItem("MLB1615760527")).toEqual('object');
  })
  it('Teste se fetch item é igual ao retorno de item', async () => {
    expect.assertions(1)
    expect(await fetchItem("MLB1615760527")).toEqual(item);
  })
  it('Teste se fetch item sem parametro retorna um erro', async () => {
    expect.assertions(1);
    try {
      await fetchItem()
    }
    catch (error) {
      expect(error).toEqual(Error('You must provide an url'));
    }
  })
});
