const express = require('express');
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getFeaturedProducts
} = require('../controllers/productController');

const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.route('/')
  .get(getProducts)
  .post(protect, authorize('admin'), createProduct);

router.route('/featured').get(getFeaturedProducts);

router.route('/:id')
  .get(getProduct)
  .put(protect, authorize('admin'), updateProduct)
  .delete(protect, authorize('admin'), deleteProduct);

router.route('/:id/reviews').post(protect, createProductReview);

module.exports = router;