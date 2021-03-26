import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { articlesRouting } from './articles-routing';
import { ArticlesComponent } from './articles.component';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    articlesRouting,
    MatTabsModule
  ]
})
export class ArticlesModule { }
