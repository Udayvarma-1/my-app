import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  //  public ap:number = 0; 
  //  public bp:number=0;

  //  catch(value:any){
  //   this.bp = value;
  //  }

  //  rating task

  // @Input() public dc:any = [];

  // calculator task
  public n1:number=0;
  public n2:number=0;
  public result:number=0;

  catch(value:any){
    this.result = value;
    
  }

 


   

   
  

}
