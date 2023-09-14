import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() public ac:number = 0;
  public bc:number = 0;
  @Output() public bEvent:EventEmitter<any> = new EventEmitter();

  // send(){
  //   this.bEvent.emit(this.bc);
  // }

  // rating task
  // @Input() public ud:any = [];
  
// calculator task

@Input() public number1:number=0;
@Input() public number2:number=0;

@Output() public cal:EventEmitter<any> = new EventEmitter();

sum(){
  this.cal.emit(this.number1+this.number2)

}
sub(){
  this.cal.emit(this.number1-this.number2)
}
mul(){
  this.cal.emit(this.number1*this.number2)
}

  





}
