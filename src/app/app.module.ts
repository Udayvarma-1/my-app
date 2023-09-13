import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { TableComponent } from './table/table.component';
import { PipesComponent } from './pipes/pipes.component';
import { GradeComponent } from './grade/grade.component';
import { DiceComponent } from './dice/dice.component';
import { BankComponent } from './bank/bank.component';
import { PricePipe } from './price.pipe';
import { AgePipe } from './age.pipe';
import { ImpDirective } from './imp.directive';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AccountsComponent } from './accounts/accounts.component';
import { PracticeComponent } from './practice/practice.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { EmailComponent } from './email/email.component';
import { PhotosComponent } from './photos/photos.component';
import { BoredomComponent } from './boredom/boredom.component';
import { BooksComponent } from './books/books.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateuserComponent } from './createuser/createuser.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    DatabindingComponent,
    CalculatorComponent,
    RectangleComponent,
    BmiComponent,
    DirectivesComponent,
    TableComponent,
    PipesComponent,
    GradeComponent,
    DiceComponent,
    BankComponent,
    PricePipe,
    AgePipe,
    ImpDirective,
    UsersComponent,
    VehiclesComponent,
    AccountsComponent,
    PracticeComponent,
    FlipkartComponent,
    EmailComponent,
    PhotosComponent,
    BoredomComponent,
    BooksComponent,
    CreatevehicleComponent,
    CreateuserComponent,
    CreateaccountComponent,
    VehicledetailsComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
