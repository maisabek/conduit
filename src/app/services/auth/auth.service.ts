import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ErrorHandler } from 'src/app/shared/http-handler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router:Router) { }
  ErrorHandler:ErrorHandler
  currentUser:string
  getUsers():Observable<any>{
  try{
  return this.http.get(`assets/users.json`)
  }catch(error){
   this.ErrorHandler.handle(error)
  }
  }
  login():Observable<any>{
  try{
  return this.http.get(``)
  }catch(error){
   this.ErrorHandler.handle(error)
  }
  }
  register(data):Observable<any>{
  try{
   return this.http.post(``,data)
  }catch(error){
   this.ErrorHandler.handle(error)
  }
  }
  getToken(){
    localStorage.getItem('token')
  }
  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/articles'])
  }
}
