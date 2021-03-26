import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
    public article:ArticleService){}
  currentId:any
  date=new Date()
  comment:any
  
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data =>{
    this.currentId=data.get('id')
    })
  }

  pushComment(){
    this.article.pushComments(this.comment)
  }
 


}
