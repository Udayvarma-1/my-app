import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  public vehicles:any = [];
  public column:any = "";
  public order:any = "";
  public search:any = "";
  public limit:any = "";
  public page:any = "";


  constructor(private vehiclesService:VehiclesService){

    vehiclesService.getVehicles().subscribe(
      (data:any)=>{
      this.vehicles = data;
      },
      (error:any)=>{
        alert("Internal server error")
      }
    )
  }
  deleteVehicles(id:any){
    this.vehiclesService.deleteVehicles(id).subscribe(
      (data:any)=>{
        alert("deleted successful");
        location.reload();
      },
      (error:any)=>{
        alert("Internal server error")
      }
    )
  }

 

  getfilteredVehicles(){

  this.vehiclesService.getfilteredVehicles(this.search).subscribe(
  (data:any)=>{
    this.vehicles = data;
  },
  (error:any)=>{
    alert("Internal server error")
  }

)
  }
 
  getSortedVehicles(){

    this.vehiclesService.getSortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (error:any)=>{
        alert("Internal server error")
      }
    )
  }
  getPagedvehicles(){
    this.vehiclesService.getPagedvehicles(this.limit,this.page).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (error:any)=>{
        alert("Internal server error")
      }
    )
  }

}
