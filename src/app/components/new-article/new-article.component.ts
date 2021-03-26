import { Component, OnInit,TemplateRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ArticleService } from 'src/app/services/article.service';
import {BsModalService,BsModalRef} from 'ngx-bootstrap/modal'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {
   tags:string[]
    modalRef:BsModalRef
    articleForm:FormGroup
  constructor(public articleService:ArticleService,private fb:FormBuilder,
    private ModalService:BsModalService,private dialog:MatDialog) { 
      this.articleForm=this.createFormItem('init')
      this.tags=['Sports','Health','News','Policy','Economy']
    }
  ngOnInit() {}
   openModal(templateRef:TemplateRef<any>){
    this.modalRef=this.ModalService.show(templateRef)
   }
   closeModal(){
     this.modalRef.hide()
   }
   openDialog(template:TemplateRef<any>){
    this.dialog.open(template)
  }
  hideDialog(){
    this.dialog.closeAll()
  }
  pushArticles(){
  this.articleService.pushIntoArticles(this.articleForm.value)
  console.log(this.articleService.articles)
  }
  createFormItem(item){
   let articleForm = this.fb.group({})
    switch(item){
     case 'init':
       articleForm=this.fb.group({
      title:'',
      about:'',
      content:'',
      tags:this.fb.array([])
      })
      break
      case 'tag':
        articleForm=this.fb.group({
          tag:''
        })
      break
    }
    return articleForm
  }
  getTags(){
  return this.articleForm.get('tags') as FormArray
  }
  addTags(){
    this.getTags().push(this.createFormItem('tag'))
  }
  deleteTags(index:number){
   this.getTags().removeAt(index)
  }


}
