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
    let totalPrice = 0;
    for (const product of this.products) totalPrice += product.price;
    return totalPrice;
  }
}
