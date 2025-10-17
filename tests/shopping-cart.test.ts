import { ShoppingCart } from '../src/shopping-cart';

describe('ShoppingCart', () => {
  let cart: ShoppingCart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  describe('addProduct', () => {
    it('should add a product to the cart', () => {
      cart.addProduct({ name: 'Laptop', price: 1000 });
      expect(cart.products).toHaveLength(1);
      expect(cart.products[0]).toEqual({ name: 'Laptop', price: 1000 });
    });
  });
});
