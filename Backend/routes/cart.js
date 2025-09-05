const express = require('express');
const {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
  applyCoupon
} = require('../controllers/cartController');

const { protect } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router.route('/')
  .get(getCart)
  .post(addToCart)
  .delete(clearCart);

router.route('/coupon').post(applyCoupon);
router.route('/:itemId')
  .put(updateCartItem)
  .delete(removeFromCart);

module.exports = router;