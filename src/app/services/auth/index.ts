import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { errorInterceptor } from "./error-interceptor";
import { TokenInterceptor } from "./token-interceptor";

export const interceptorProviders=[
    {providedIn:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true},
    {providedIn:HTTP_INTERCEPTORS,useClass:errorInterceptor,multi:true}
]