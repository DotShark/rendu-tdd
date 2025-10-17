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
    this._products.push(product);
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (const product of this._products) totalPrice += product.price;
    
    if (totalPrice > 100) totalPrice *= 0.9;
    
    return totalPrice;
  }
}
