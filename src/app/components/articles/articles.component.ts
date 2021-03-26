import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service'
import { TabsetConfig } from 'ngx-bootstrap/tabs';
export function getTabsetConfig(): TabsetConfig {
  return Object.assign(new TabsetConfig(), 
  { type: 'tabs', isKeysAllowed: false });
}
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
   providers: [{ provide: TabsetConfig, useFactory: getTabsetConfig }]
})
export class ArticlesComponent implements OnInit {
  date=new Date()
  count:number[]=[0,0,0,0,0,0,0,0,0]
  flag:boolean=false
  constructor(public ArticleService:ArticleService){}
  ngOnInit(){}
  increaseCount(index){
    if(this.flag){
      this.count[index]=0
      this.flag=false
    }else{
      this.count[index]=1
      this.flag=true
    }
  }


}
