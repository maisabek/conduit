import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { newArticleRouting } from './new-article-routing';
import { NewArticleComponent } from './new-article.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    NewArticleComponent
  ],
  imports: [
    CommonModule,
    newArticleRouting,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ModalModule.forRoot(),
    MatDialogModule,
    ReactiveFormsModule 

  ]
})
export class NewArticleModule { }
