import { Component, OnInit } from '@angular/core';
import {IProduct } from './product';
import { ProductService } from './product.service';
@Component({
    selector: 'app-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

    pageTitle = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    errorMessage: string;

    // tslint:disable-next-line: variable-name
    _listFilter: string;

    get listFilter(): string {
      return this._listFilter;
    }

    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this._listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];

      constructor(private productSrv: ProductService) {
      }

      toggleImage(): void {
        this.showImage = !this.showImage;
      }

      onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
      }

      performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLowerCase();
        return this.products.filter((product: IProduct) =>
        product.productName.toLowerCase().indexOf(filterBy) !== -1);
      }

      ngOnInit(): void {
        this.productSrv.getProducts().subscribe(
          products => {
            this.products = products;
            this.filteredProducts = this.products;
          },
          error => this.errorMessage = error as any
        );
      }
}
