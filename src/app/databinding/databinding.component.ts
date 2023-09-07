import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  public age:number = 20;
  public name:string = "Abcd";
  public isIndian:boolean =  true;

  public phone:string = "+91 ";


  submit(){
    alert("submit clicked");
  }


  cancel(){
    alert("cancel double clicked");
  }

  typed(){
    alert("Typed something");
  }


}
