import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailsComponent } from './article-details.component';
import { articleDetailsRouting } from './article-details.routng';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    ArticleDetailsComponent
  ],
  imports: [
    CommonModule,
    articleDetailsRouting,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
    
  ]
})
export class ArticleDetailsModule { }
