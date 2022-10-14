require("../mocks/fetchSimulator");
const { fetchProducts } = require("../helpers/fetchProducts");
const { results } = require("../mocks/search");
const computadorSearch = require("../mocks/search");

describe("1 - Teste a função fetchProducts", () => {
  // implemente seus testes aqui
  it("Verifica se fetch Products é uma função", () => {
    expect.assertions(1);
    expect(typeof fetchProducts).toBe("function");
  });
  it("Verifica se fetch foi chamado", async () => {
    expect.assertions(1);
    await fetchProducts("computador");
    expect(fetch).toHaveBeenCalled()
  });
  it("Verifica se fetch Products com parametro retorna object", async () => {
    expect.assertions(1);
    expect(typeof await fetchProducts("computador")).toEqual('object');
  });
  it("Verifica se fetch Products é igual a computadorSearch ", async () => {
    expect.assertions(1);
    expect(await fetchProducts("computador")).toEqual(computadorSearch);
  });
  it("Verifica se ao não passar nenhum parametro retorna mensagem específica", async () => {
    expect.assertions(1);
    try {
      await fetchProducts()
    }
    catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
});

