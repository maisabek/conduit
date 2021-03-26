import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArticlesComponent } from "./articles.component";

const route:Routes=[
{path:'',component:ArticlesComponent}
]


@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]
})
export class articlesRouting{}