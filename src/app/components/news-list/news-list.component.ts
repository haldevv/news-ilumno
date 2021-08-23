import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INews } from 'src/app/models/news.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  @Input() news: INews[] = []

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * redirecciona al detalle de la noticia
   * @param id id de la noticia
   */
  goToNewsDetail(id: string): void {
    this.router.navigate(['noticias', id])
  }

}
