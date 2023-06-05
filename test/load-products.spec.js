import { ProductsRepository } from "../src/repository/products.repository";
import { LoadProductsUseCase } from "../src/usecases/load-products.usecase";

jest.mock("../src/repository/products.repository");

describe("products repository specs", () => {
  beforeEach(() => {
    ProductsRepository.mockClear();
  });

  it("should load the products data", async () => {
    ProductsRepository.mockImplementation(() => {
      return {
        fetchProductsData: () => [
          {
            id: "ZmGrkLRPXOTpxsU4jjAcv",
            brand: "Acer",
            model: "Iconia Talk S",
            price: "170",
            imgUrl:
              "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg",
          },
          {
            id: "cGjFJlmqNPIwU59AOcY8H",
            brand: "Acer",
            model: "Liquid Z6 Plus",
            price: "250",
            imgUrl:
              "https://front-test-api.herokuapp.com/images/cGjFJlmqNPIwU59AOcY8H.jpg",
          },
          {
            id: "8hKbH2UHPM_944nRHYN1n",
            brand: "Acer",
            model: "Liquid Z6",
            price: "120",
            imgUrl:
              "https://front-test-api.herokuapp.com/images/8hKbH2UHPM_944nRHYN1n.jpg",
          },
        ],
      };
    });

    const products = await LoadProductsUseCase.execute();

    const product = products[0];

    expect(products.length).toBe(3);

    expect(product.id).toBe("ZmGrkLRPXOTpxsU4jjAcv");
    expect(product.brand).toBe("Acer");
    expect(product.model).toBe("Iconia Talk S");
    expect(product.price).toBe("170");
  });
});
