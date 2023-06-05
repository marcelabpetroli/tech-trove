import axios from "axios";
import dataJson from "../fixtures/products.json";

const apiUrl = "https://front-test-api.herokuapp.com/api/product";

async function isApiAvailable(url) {
  try {
    const response = await axios.head(url);
    return response.status === 200;
  } catch (error) {
    return false;
  }
}

export class ProductsRepository {
  async fetchProductsData() {
    try {
      let response;

      if (await isApiAvailable(apiUrl)) {
        response = await axios.get(apiUrl);
      } else {
        response = { data: dataJson };
      }

      const data = response.data;
      return data;
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
}
