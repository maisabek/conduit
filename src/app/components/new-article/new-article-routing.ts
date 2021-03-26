import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewArticleComponent } from "./new-article.component";

const route:Routes=[
{path:'',component:NewArticleComponent}
]



@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]
})

export class newArticleRouting{}