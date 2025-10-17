export class ShoppingCart {
  products: any[] = [];
  
  addProduct(product: any) {
    this.products.push(product);
  }
}