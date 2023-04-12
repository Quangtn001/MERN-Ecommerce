const ProductModel = require("../models/ProductModel");
class HomeProducts {
  async catProducts(req, res) {
    const { name, page } = req.params;
    const perPage = 12;
    const skip = (page - 1) * perPage;
    if (page) {
      try {
        const count = await ProductModel.find({
          category: name,
        }).countDocuments();
        const response = await ProductModel.find({ category: name })
          .skip(skip)
          .limit(perPage)
          .sort({ updatedAt: -1 });
        return res.status(200).json({ products: response, perPage, count });
      } catch (error) {
        console.log(error.message);
      }
    } else {
      const response = await ProductModel.find({ ...options })
        .where("stock")
        .gt(0)
        .limit(4)
        .populate("reviews")
        .sort({ updatedAt: -1 });
      return res.status(200).json({ products: response });
    }
  }
}
module.exports = new HomeProducts();
