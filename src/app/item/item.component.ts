import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  constructor(private commonService:CommonService){}
  add(){
    this.commonService.setValue();
  }


}
