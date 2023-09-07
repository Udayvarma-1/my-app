import { Component } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {

  public photos : any = [];

  constructor (private _photosService:PhotosService){

 this. _photosService.getphotos().subscribe(

  (data:any)=>{
    this.photos = data.data.memes;
  },
  (error:any)=>{
    alert("Internal server error")
  }

 )
}

}
