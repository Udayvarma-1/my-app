import { Component } from '@angular/core';
import { BoredomService } from '../boredom.service';

@Component({
  selector: 'app-boredom',
  templateUrl: './boredom.component.html',
  styleUrls: ['./boredom.component.css']
})
export class BoredomComponent {

  public boredom:any = [];

  constructor(private _boredomService:BoredomService){

    _boredomService.getboredom().subscribe(

      (data:any)=>{
        this.boredom = [data];
      },
      (error:any)=>{
        alert("Internal server error");
      }

    )
  }
 Reload(){
    this._boredomService.getboredom().subscribe(
      (data:any)=>{
        this.boredom = [data];
      },
      (error:any)=>{
        alert("Internal server error")
      }
    ) 
 }

}

