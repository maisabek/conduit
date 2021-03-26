import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'articles',pathMatch:'full'},
  {path:'articles',loadChildren: () => import('./components/articles/articles.module').then(m => m.ArticlesModule)},
  {path:'new-article',loadChildren:()=>import('./components/new-article/new-article.module').then(m => m.NewArticleModule)},
  {path:'article-details/:id',loadChildren:()=>import('./components/article-details/article-details.module').then(m => m.ArticleDetailsModule)},
   {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
