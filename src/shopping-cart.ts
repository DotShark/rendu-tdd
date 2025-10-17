export interface Product {
  name: string;
  price: number;
}

export class ShoppingCart {
  private _products: Product[] = [];

  get products(): Product[] {
    return this._products;
  }
  
  addProduct(product: Product): void {
    if (!product || typeof product !== 'object') {
      throw new Error('Product must be a valid object');
    }

    if (typeof product.name !== 'string' || product.name === '') {
      throw new Error('Product must have a valid name');
    }

    if (typeof product.price !== 'number' || product.price <= 0) {
      throw new Error('Product must have a valid price greater than 0');
    }

    this._products.push(product);
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (const product of this._products) totalPrice += product.price;
    
    if (totalPrice > 100) totalPrice *= 0.9;
    
    return totalPrice;
  }
}
