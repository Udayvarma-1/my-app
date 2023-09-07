import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {
  public accountForm:FormGroup = new FormGroup({
    account_name:new FormControl(),
    available_balance:new FormControl(),
    account_number:new FormControl(),
    city:new FormControl(),
  });
  constructor(private accountservice:AccountsService){}
  Submit(){
    console.log(this.accountForm);
    this.accountservice.createaccounts(this.accountForm.value).subscribe(
      (data:any)=>{
        alert("account created successfully")
      },
      (error:any)=>{
        alert("account creation failed")
      }
    )

  }
  


}
