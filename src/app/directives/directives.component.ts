import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  public ages:number[] = [10,20,30,40,50,60];
  public states:string[] = ['Telangana','Andra pradhesh','Karnataka','Tamilanadu']

  public time:number = 0;
 public term:string = "";
 filter(){
  this.users = this.users.filter((value:any)=>value.name.includes(this.term))

 }
  
 ageHighToLow(){
  this.users = this.users.sort((a:any,b:any)=>b.age-a.age)
 }
 ageLowToHigh(){
  this.users = this.users.sort((a:any,b:any)=>a.age-b.age)
 }
  increaseByOne(){
    this.users = this.users.map((value:any)=>{
      value.age = value.age+1;
      return value;
    })
  }
  total(){
    let total = this.users.reduce((sum:any,a:any)=>sum+a.age,0);
    alert(total);
  }



  public users:any =[
    {name:'uday',age:3,marks:90,phone:9868575748},
    {name:'sathish',age:13,marks:20,phone:8565897485},
    {name:'vishnu',age:15,marks:30,phone:9685775748},
    {name:'sujith',age:25,marks:40,phone:8545857432},
  ]
  delete(i:any){
    this.users.splice(i,1);
  }

}
