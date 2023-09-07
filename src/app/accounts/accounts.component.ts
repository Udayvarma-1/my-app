import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {

  public accounts:any = [];
  public search:any = "";
  public column:any = "";
  public order:any = "";
  public limit:any = "";
  public page:any = "";

  constructor(private _accountsService:AccountsService){

    _accountsService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (error:any)=>{
        alert("Internal server error");
      }
    )
  }
  
  getfilteredaccounts(){

  this._accountsService.getfilteraccounts(this.search).subscribe(

    (data:any)=>{
      this.accounts = data;

    },
    (error:any)=>{
      alert("Internal serve error")
    }
  )
  } 
  getSortaccounts(){
    this._accountsService.getSortaccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (error:any)=>{
        alert("Internal server error")
      }
    )
  }
   deleteaccounts(id:any){
     this._accountsService.deleteaccounts(id).subscribe(
      (data:any)=>{

        alert("deleted successful");
        location.reload();
      },
      (error:any)=>{
        alert("Internal server error")
      },
     )

   }
   getpaginationaccounts(){
    this._accountsService.getpaginationaccounts(this.limit,this.page).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (error:any)=>{
        alert("Internal server error");
      }
    )

   }



}
