import { Component, Input, OnInit } from '@angular/core';
import { INews } from 'src/app/models/news.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  @Input() news: INews[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
