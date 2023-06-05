import { Product } from "../model/product";
import { ProductsRepository } from "../repository/products.repository";

export class LoadProductsUseCase {
  static async execute() {
    const repository = new ProductsRepository();
    const data = await repository.fetchProductsData();

    const products = data.map(
      (product) =>
        new Product({
          id: product.id,
          brand: product.brand,
          model: product.model,
          price: product.price,
        })
    );
    return products;
  }
}
