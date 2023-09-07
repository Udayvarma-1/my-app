import { Component } from '@angular/core';
import { PracticeService } from '../practice.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {

  public practice: any = [];
  public search :any = "";
  public column: any ="";
  public order:any ="";

  constructor(private _practiceService: PracticeService) {
    _practiceService.getpractice().subscribe(
      (data:any) =>{
        this.practice = data.entries;
      },
      (error: any) => {
        alert("Internal server error")
      }
    )
  }
  getfilteredPractice(){
    this. _practiceService.getfilteredPractice(this.search).subscribe(
      (data:any)=>{
        this.practice = data.entries;
        console.log(this.practice)
      },
      (error:any)=>{
        alert("Internal server error")
      }
    )
  }
  getSortedPractice(){
    this._practiceService.getSortedPractice(this.column,this.order).subscribe(
      (data:any)=>{
        this.practice = data.entries;
      },
      (error:any)=>{
        alert("Internal server error")
      }
    )

  }

  
  


  delete(i:any){
    this.practice.splice(i,1)
  }

}
