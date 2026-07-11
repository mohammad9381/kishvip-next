const db = require("../model");
const Order = db.order;
const Product = db.product;
var uuid = require("uuid");

class OrderController {
  async getAll() {
    const orders = await Order.findAll({
      where: { is_trashed: 0, is_enable: 1 },
    });

    return orders;
  }

  async checkCapacity(date_mehman, product_id) {
    const product = await Product.findByPk(product_id);

    const orders = await Order.findAll({
      where: {
        product_id: product_id,
        date_mehman: date_mehman,
        is_trashed: 0,
        is_del: 0,
      },
    });

    let used = 0;

    orders.forEach((order) => {
      used = order.tedad + used;
    });

    return { capacity: product.capacity - used, price: product.price };
  }

  async createOrder(data) {
    const order = await Order.create({ ...data, uniq_code: uuid.v4() });

    return order;
  }

  async getOrders(product_id, date_mehman) {
    try {
      const whereClause = {};

      if (product_id) whereClause.product_id = product_id;

      if (date_mehman && date_mehman !== null)
        whereClause.date_mehman = date_mehman;

      const orders = await Order.findAll({
        where: whereClause,
        include: ["product"],
      });

      return orders;
    } catch (er) {
      console.log(er);
      return [];
    }
  }
}

export default OrderController;
