import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {
  public id:any = [];
  public showbutton:any;


  public vehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    address: new FormGroup({
      hno: new FormControl(),
      state: new FormControl(),
      pin: new FormControl(),
    }),
    type1: new FormControl(),
    busFee: new FormControl(),
    hostelFee: new FormControl(),
    cards: new FormArray([])
  });
  get cardsFormArray() {
    return this.vehicleForm.get('cards') as FormArray;
  }
  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
        no:new FormControl(),
        exp: new FormControl(),
        cvv:new FormControl()
      })
    )
    }
    deletecard(i:number){
      this.cardsFormArray.removeAt(i);
        

    

}





constructor(private vehicleService: VehiclesService, private activatedRoute: ActivatedRoute){ 
  activatedRoute.params.subscribe(
    (data:any)=>{
      this.id = data.id;

      vehicleService.getVehicledetails(this.id).subscribe(
        (data:any)=>{
          this.vehicleForm.patchValue(data);
        }
      )
    }
  )

  this.showbutton=this.id?"Update" : "Submit"
}

Submit(){
  if(this.id){
    this.vehicleService.updateVehicle(this.id,this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("updated succefully");
      },
      (error:any)=>{
        alert("internal server error");
      }
    )
  }
  else{
    this.vehicleService.createVehicles(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert('created succefully');
      },
      (error:any)=>{
        alert("intrnal server error");
      }
    )
  }

}

}
