import { ShoppingCart } from '../src/shopping-cart';

describe('ShoppingCart', () => {
  let cart: ShoppingCart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  test('should be empty when initialized', () => {
    expect(cart.products).toHaveLength(0);
  });

  describe('addProduct', () => {
    test('should add a product to the cart', () => {
      cart.addProduct({ name: 'Laptop', price: 1000 });
      expect(cart.products).toHaveLength(1);
      expect(cart.products[0]).toEqual({ name: 'Laptop', price: 1000 });
    });

    test('should add multiple products to the cart', () => {
      cart.addProduct({ name: 'Laptop', price: 1000 });
      cart.addProduct({ name: 'Mouse', price: 50 });
      expect(cart.products).toHaveLength(2);
      expect(cart.products[1]).toEqual({ name: 'Mouse', price: 50 });
    });

    test('should add products with different prices', () => {
      cart.addProduct({ name: 'Keyboard', price: 150 });
      cart.addProduct({ name: 'Monitor', price: 300 });
      expect(cart.products).toHaveLength(2);
      expect(cart.products[0].price).toBe(150);
      expect(cart.products[1].price).toBe(300);
    });
  });

  describe('getTotalPrice', () => {
    test('should return 0 for an empty cart', () => {
      expect(cart.getTotalPrice()).toBe(0);
    });

    test('should return the total price for a cart that costs less than 100', () => {
      cart.addProduct({ name: 'Mouse', price: 25 });
      cart.addProduct({ name: 'USB Cable', price: 15 });
      expect(cart.getTotalPrice()).toBe(40);
    });

    test('should return the sum of all product prices', () => {
      cart.addProduct({ name: 'Laptop', price: 1000 });
      cart.addProduct({ name: 'Mouse', price: 50 });
      cart.addProduct({ name: 'Keyboard', price: 150 });
      expect(cart.getTotalPrice()).toBe(1200);
    });
  });
});
