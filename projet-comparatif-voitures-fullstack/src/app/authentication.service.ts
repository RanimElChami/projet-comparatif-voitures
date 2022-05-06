import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  connectedUser:any=null;
  userType:any=null;
  constructor(private http:HttpClient) {
    this.isLogged();
  };
  
  login(email:any,password:any):Observable<any>{
    return this.http.post("http://localhost:3000/login", {email:email, password:password}, {withCredentials:true});
  }
  logout():Observable<any>{
    console.log('Logged out');
    return this.http.get("http://localhost:3000/logout", {withCredentials:true});
  }
  register(email:any, password:any, firstName:any, lastName:any, dob:any):Observable<any>{
    return this.http.post("http://localhost:3000/register",{email:email, password:password, firstName:firstName,lastName:lastName,dob:dob},{withCredentials:true})
  }  

  isLogged(){
    this.http.get("http://localhost:3000/islogged",{withCredentials:true}).subscribe(
      (connectedUser)=>{
        this.connectedUser = connectedUser;
        //this.userType = userType;
        console.log(this.connectedUser)
        console.log("User connected")
      },
      (error)=>{
        console.log("User not connected")
      }
    )
  }
}
