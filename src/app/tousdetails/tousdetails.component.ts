import { Component, Input } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'app-tousdetails',
  templateUrl: './tousdetails.component.html',
  styleUrls: ['./tousdetails.component.css']
})
export class TousdetailsComponent {
  @Input() product!:IProduct;
  products : IProduct[];
  cart: IProduct[] =[];
  filter : string = '';
  constructor() {
    this.products = [
      {
        id: 1,
        description:
          "A small delicious cheesecake",
        name: "Cheese cake",
        imageName: "cheesecakesmall.jpg",
        category: "Un pur plaisir",
        price: 12,
        details: "voir details",
      },
      {
        id: 2,
        description:
          "A delicious unique applepie",
        name: "applepie",
        imageName: "applepiesmall.jpg",
        category: "Un vrai delice",
        price: 22,
        details: "voir details",
      }
    ];
    }
    getImageUrl(product: IProduct) {
      if (!product) return '';
      return '/assets/images/products/' + product.imageName;
    }
    getFilteredProducts() {
      return this.filter === ''
        ? this.products
        : this.products.filter((product: any) => product.category === this.filter);
    }
    
}
