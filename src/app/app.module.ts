import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from './data.service';
import { CrudlistService } from './crudlist.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatInputModule} from '@angular/material/input';
import{MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule} from '@angular/material/icon';
import { MatIconRegistry} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http' ;
import{FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatButtonModule,
    MatIconModule,MatInputModule,
    MatTableModule,HttpClientModule,
    FormsModule,BrowserAnimationsModule

  ],
  providers: [DataService,CrudlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
