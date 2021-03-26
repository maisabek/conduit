import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {article} from '../models/article'
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private route:Router) { }
  articles=[]
  comments=[]
  pushIntoArticles(article:any){
   this.articles.push(article)
  }
  pushComments(comment:any){
    this.comments.push(comment)
  }
  deleteComment(index){
    this.comments.splice(index,1)
  }
  deleteArticle(index){
    this.articles.splice(index,1)
    this.route.navigate(['/articles'])

  }
}
