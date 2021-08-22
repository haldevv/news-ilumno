import { Component, Input, OnInit } from '@angular/core';
import { INews } from 'src/app/models/news.model';

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.scss']
})
export class NewsListItemComponent implements OnInit {
  @Input() newsItem: INews = {id: '', title: '', body: ''}

  constructor() { }

  ngOnInit(): void {
  }

}
