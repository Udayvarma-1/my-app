import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {


  public userForm: FormGroup = new FormGroup({
    name: new FormControl("",[Validators.required, Validators.minLength(3)]),
    phone: new FormControl("",[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    city: new FormControl(),
    fee: new FormControl(),
    id: new FormControl(),
    address: new FormGroup({
      hno: new FormControl(),
      state: new FormControl("",[Validators.required]),
      pin: new FormControl("",[Validators.required,Validators.min(100000),Validators.max(999999)]),
    }),

    type:new FormControl(),
    busFee: new FormControl(),
    hostelFee:new FormControl(),
    cards: new FormArray([])
  });

  get cardsFormArray() {
    return this.userForm.get('cards') as FormArray;
  }

  addcard() {
    this.cardsFormArray.push(
      new FormGroup({
        no: new FormControl(),
        exp: new FormControl(),
        cvv: new FormControl("",[Validators.required,Validators.min(100),Validators.max(999)])
      })


    )
  }
  deleteCard(i:number){
    this.cardsFormArray.removeAt(i);
  }

  constructor(private userService: UsersService) { }
  Submit() {
    console.log(this.userForm);
    this.userService.createusers(this.userForm.value).subscribe(
      (data: any) => {
        alert("user created successfully")
      },
      (error: any) => {
        alert("user creation failed")
      }
    )

  }

}
