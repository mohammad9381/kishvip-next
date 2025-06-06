const db = require("../model");
const Product = db.product;

class ProductController {
  async getAll() {
    const products = await Product.findAll({
      where: { is_trashed: 0, is_enable: 1 },
    });

    return products;
  }
}

export default ProductController;
