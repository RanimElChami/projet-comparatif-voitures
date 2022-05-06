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
    console.log('in submit');
    console.log(this.email, this.password);
    this.authenticationService.connectedUser.login(this.email, this.password).subscribe(
      (userInfo:any)=>{
        this.authenticationService.connectedUser = userInfo;
        console.log("login user", this.authenticationService.connectedUser);
        this.router.navigate(["/home"]);
      }
    )
  }

}
