import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticleDetailsComponent } from "./article-details.component";


const route:Routes=[
{path:'',component:ArticleDetailsComponent}
]

@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]
})

export class articleDetailsRouting{}