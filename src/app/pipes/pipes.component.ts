import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  public name:string = 'abcdef';

  public city:string = 'HYDERABAD';

  public user: any = {name:'abcd', age:24};

  public today:any = new Date();

}