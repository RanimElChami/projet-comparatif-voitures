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

  constructor(public authenticationService:AuthenticationService, private router: Router) { }

  ngOnInit(): void {}

  submit(): void {
    console.log("login");
  }


}
