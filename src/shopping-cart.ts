export interface Product {
  name: string;
  price: number;
}

export class ShoppingCart {
  products: Product[] = [];
  
  addProduct(product: Product): void {
    this.products.push(product);
  }

  getTotalPrice() {
    return 0;
  }
}
