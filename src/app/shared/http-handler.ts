import { HttpErrorResponse } from "@angular/common/http";

export class ErrorHandler{
    handle(err:HttpErrorResponse){
        if(err.error instanceof ErrorEvent){
        console.error('client side error',err.error.message)
         console.error('server side error',err)
        }else{
         alert('please refresh website again')
        }
    }
}