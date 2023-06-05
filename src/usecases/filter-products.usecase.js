export class FilterProducts {
  static execute(products, query) {
    return products
      .filter(
        (prod) =>
          prod.brand.toLowerCase().includes(query.toLowerCase()) ||
          prod.model.toLowerCase().includes(query.toLowerCase())
      )
      .sort(function (a, b) {
        return a.brand.localeCompare(b.brand) || a.model.localeCompare(b.model);
      });
  }
}
