import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicledetails',
  templateUrl: './vehicledetails.component.html',
  styleUrls: ['./vehicledetails.component.css']
})
export class VehicledetailsComponent {

  public vehicle:any = {};
  public id:any = [];

  constructor(private activatedRoute: ActivatedRoute, private vehicleService:VehiclesService){
    activatedRoute.params.subscribe(
      (data:any)=>{
        this.id = data.id ;

        vehicleService.getVehicledetails(this.id).subscribe(
          (data:any)=>{
            this.vehicle=data;
          }

        )
      }
    )
  }
 
}
