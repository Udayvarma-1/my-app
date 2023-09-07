import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  public term: string = "";
  filter() {
    this.products = this.products.filter((value: any) => value.name.includes(this.term
    ))
  }
  OnlyFreeDelivery() {
    this.products = this.products.filter((value: any) => value.Fd == true);
  }

  pricelowtohigh() {
    this.products = this.products.sort((a: any, b: any) => a.price - b.price);
  }
  pricehightolow() {
    this.products = this.products.sort((a: any, b: any) => b.price - a.price);
  }
  ratinglowtohigh() {
    this.products = this.products.sort((a: any, b: any) => a.rating - b.rating);
  }
  ratinghightolow() {
    this.products = this.products.sort((a: any, b: any) => b.rating - a.rating);
  }
  discount() {
    this.products = this.products.map((value: any) => {
      value.price = value.price * 0.5;
      return value;
    })

  }
  pricedeliverycharges() {
    this.products = this.products.map((value: any) => {
      value.price = value.price + 50;
      return value;
    })
  }
  totalprice() {
    let total = this.products.reduce((sum: any, a: any) => sum + a.price, 0)
    alert(total);
  }
  totalcartitams() {
    let total = this.products.length;
    alert(total);
  }



  public products: any = [
    { name: 'pen', price: 10, rating: 3, Fd: true },
    { name: 'phone', price: 13000, rating: 2, Fd: false },
    { name: 'shirt', price: 400, rating: 4, Fd: true },
    { name: 'cap', price: 200, rating: 5, Fd: false },
    { name: 'mobilecase', price: 300, rating: 3, Fd: true },
    { name: 'remote', price: 400, rating: 2.5, Fd: false },

  ]
  delete(i:any) {
    this.products.splice(i,1);
  }


}
