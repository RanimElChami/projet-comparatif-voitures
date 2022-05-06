import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName:any = "";
  lastName:any = "";
  login:any = "";
  password:any = "";
  dob:any = "";
  email:any = "";
  hide=true;
  
  constructor(public authenticationService:AuthenticationService, private router: Router) { }

  ngOnInit(): void {}

  submit(): void {
    this.authenticationService.register (this.email, this.password, this.firstName, this.lastName, this.dob).subscribe(
      (userInfo:any) =>{
        this.authenticationService.connectedUser=userInfo;
      },
      (error)=>{
        console.error("Error registering",error);
      }
    )
    
  }


}
