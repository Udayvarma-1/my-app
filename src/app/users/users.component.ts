import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  public users: any = [];
  public search: any = "";
  public column: any = "";
  public order: any = "";
  public limit:any = "";
  public page:any = "";

  constructor(private _usersService: UsersService) {


    _usersService.getUsers().subscribe(
      (data: any) => {
        this.users = data;
      },
      (error: any) => {
        alert("internal server error");
      }
    )
  }
  getfilteredUsers() {
    this._usersService.getfilteredUsers(this.search).subscribe(
      (data: any) => {
        this.users = data;
      },
      (error: any) => {
        alert("Internal server error")
      }
    )
  }
  getSortedUsers() {
    this._usersService.getSortedUsers(this.column, this.order).subscribe(
      (data: any) => {
        this.users = data;
      },
      (error: any) => {
        alert("Internal server error")
      }
    )
  }
  deleteUsers(id: any) {
    this._usersService.deleteUsers(id).subscribe(
      (data: any) =>{
        alert("deleted successful")  
        location.reload();
      },
        (error:any)=>{
          alert("Internal server error")
        }
    )


  }
  getpagedUsers(){
    this._usersService.getpagedUsers(this.limit,this.page).subscribe(
      (data:any)=>{
        this.users = data;
      },
      (error:any)=>{
        alert("Internal server error");
      }
    )
  }



}
