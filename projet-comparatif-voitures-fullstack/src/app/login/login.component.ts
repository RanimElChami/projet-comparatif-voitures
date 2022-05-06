import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:any = "";
  password:any = "";
  hide = true;
  constructor(public authenticationService:AuthenticationService, private router: Router) { }
  
  submit(): any {
    this.authenticationService.login(this.email, this.password).subscribe(
      (userInfo:any)=>{
        this.authenticationService.connectedUser = userInfo;
        this.router.navigate(["/home"]);
      }
    )
  }
}
