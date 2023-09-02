import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:string='';
  password:string='';

  constructor(private router:Router,private dataService:DataService) {}
  login(): void{
    if(this.dataService.authenticate(this.username,this.password)){
     console.log('Authentication successfull.Navigating to dashboard...');
      this.router.navigate(['/dashboard']);
    }
    else{
      console.log('Authentication fail.showing alert...');
      alert('Invalid credentials');
      
    }
  }

}





  