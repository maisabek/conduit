import {HttpInterceptor,HttpRequest,HttpHandler} from '@angular/common/http'
import { Injector ,Injectable} from '@angular/core'
import { AuthService } from './auth.service'
@Injectable({providedIn:'root'})
export class TokenInterceptor implements HttpInterceptor {
    constructor(private inject:Injector){}
intercept(req:HttpRequest<any>,next:HttpHandler){
    const authService=this.inject.get(AuthService)
    const reqModified=req.clone({
        setHeaders:{
            Authorization:`Brear ${authService.getToken()}`
        }
    })
    return next.handle(reqModified)
}

}