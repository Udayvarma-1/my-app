import { Component } from '@angular/core';
import { BankService } from './bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {

  public a:number = 0;

  constructor(private _bankservice:BankService){

    this.a = _bankservice.balance

  }

  

}
