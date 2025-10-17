import { ShoppingCart } from '../src/shopping-cart';

describe('ShoppingCart', () => {
  let cart: ShoppingCart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  test('should initialize with an empty products array', () => {
    expect(cart.products).toHaveLength(0);
  });

  describe('addProduct', () => {
    test('should add a single product to the cart and store it correctly', () => {
      cart.addProduct({ name: 'Laptop', price: 1000 });
      expect(cart.products).toHaveLength(1);
      expect(cart.products[0]).toEqual({ name: 'Laptop', price: 1000 });
    });

    test('should add multiple products to the cart in sequence', () => {
      cart.addProduct({ name: 'Laptop', price: 1000 });
      cart.addProduct({ name: 'Mouse', price: 50 });
      expect(cart.products).toHaveLength(2);
      expect(cart.products[1]).toEqual({ name: 'Mouse', price: 50 });
    });

    test('should correctly add products with varying price points', () => {
      cart.addProduct({ name: 'Keyboard', price: 150 });
      cart.addProduct({ name: 'Monitor', price: 300 });
      expect(cart.products).toHaveLength(2);
      expect(cart.products[0].price).toBe(150);
      expect(cart.products[1].price).toBe(300);
    });

    test('should prevent adding products with negative prices', () => {
      expect(() => {
        cart.addProduct({ name: 'Invalid', price: -50 });
      }).toThrow();
    });

    test('should prevent adding products with zero price', () => {
      expect(() => {
        cart.addProduct({ name: 'Free Item', price: 0 });
      }).toThrow();
    });

    test('should prevent adding products which are not of the Product type', () => {
      expect(() => {
        cart.addProduct({ name: 'Invalid' } as any);
      }).toThrow();
    });
  });

  describe('getTotalPrice', () => {
    test('should return 0 when the cart is empty', () => {
      expect(cart.getTotalPrice()).toBe(0);
    });

    test('should return the exact sum for a cart with items totaling less than 100', () => {
      cart.addProduct({ name: 'Mouse', price: 25 });
      cart.addProduct({ name: 'USB Cable', price: 15 });
      expect(cart.getTotalPrice()).toBe(40);
    });

    test('should apply a 10% discount for carts exceeding 100 in total value', () => {
      cart.addProduct({ name: 'Laptop', price: 1000 });
      cart.addProduct({ name: 'Mouse', price: 50 });
      cart.addProduct({ name: 'Keyboard', price: 150 });
      expect(cart.getTotalPrice()).toBe(1080); // 1200 * 0.9 (10% discount for carts > 100)
    });

    test('should return exact sum for a cart totaling exactly 100', () => {
      cart.addProduct({ name: 'Item A', price: 50 });
      cart.addProduct({ name: 'Item B', price: 50 });
      expect(cart.getTotalPrice()).toBe(100);
    });

    test('should return exact sum for a cart totaling just over 100 without discount edge case', () => {
      cart.addProduct({ name: 'Item A', price: 60 });
      cart.addProduct({ name: 'Item B', price: 41 });
      expect(cart.getTotalPrice()).toBe(90.9); // 101 * 0.9
    });
  });
});
