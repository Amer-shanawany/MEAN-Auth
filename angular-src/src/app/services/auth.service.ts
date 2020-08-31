import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: string;
  user: any;
  baseUrl =  '/users';
  headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('Access-Control-Allow-Origin','*');
  constructor(private http:   HttpClient,
    private jwtHelperService:JwtHelperService)  { }

  registerUser(user){
    let url =  this.baseUrl + '/register';
 
    
    return this.http.post<User>(url, user, { headers: this.headers })
     .pipe(map(res => JSON.stringify(res)));
  }
  authenticateUser(user){
    let url = this.baseUrl + '/authenticate';

    return this.http.post<Data>(url, user, { headers: this.headers })
  }

  getProfile(){
    this.loadToken();
    let x = this.headers.append('Authorization', "Bearer "+this.authToken);
    let url = this.baseUrl + '/profile';
    return this.http.get<Profile>(url, { headers: x})
    //.pipe(map(res => JSON.stringify(res)));

  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
  loggedIn(){
     
    return !this.jwtHelperService.isTokenExpired();
  }
}


interface Data{
  success: string,
  msg: string,
  token: string,
  user: any
}
interface User{
  name:string,
  username:string,
  email:string,
  password:string
}
interface Profile{
  user: User
}