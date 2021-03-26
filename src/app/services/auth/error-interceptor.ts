import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { throwError } from "rxjs";
import {catchError} from 'rxjs/operators'
import { AuthService } from "./auth.service"
import {Injectable} from "@angular/core"
@Injectable({providedIn:'root'})
export class errorInterceptor implements HttpInterceptor{
    constructor(private router:Router,private authService:AuthService){}
    intercept(req:HttpRequest<any>,next:HttpHandler){
        return next.handle(req).pipe(
            catchError((err:HttpErrorResponse)=>{
             if([403,405].indexOf(err.status) != -1){
               this.authService.logout()
             }else if(err.status == 404){
                 this.router.navigate(['/applicationError'])
             }else{
                 this.router.navigate(['/resourcenotfound'])
             }
             const error=err.message || err.statusText
                return throwError(error)
            })
        )
    }
}