import { Component } from '@angular/core';
import { Subscription, switchMap, timer } from 'rxjs';
import { ApiService } from 'src/assets/services/api.service';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.css'],
})
export class NewsListingComponent {
  news: any = [];
  paginatedCardData: any[] = [];
  pageSize = 3; // Number of cards per page
  pageSizeOptions: number[] = [3, 5, 10]; // Options for items per page
  subscription!: Subscription;

  constructor(public api: ApiService) {}

  async ngOnInit() {
    this.subscription = timer(0, 10000) // calling api after every 1000 miliseconds => 10 sec
      .pipe(switchMap(() => this.api.getNews()))
      .subscribe((result) => {
        this.news = result;
        // this.paginatedCardData = this.news.articles.slice(0, this.pageSize);
      });
  }
  // onPageChange(event: PageEvent): void {
  //   const startIndex = event.pageIndex * event.pageSize;
  //   const endIndex = startIndex + event.pageSize;
  //   this.paginatedCardData = this.news.articles.slice(startIndex, endIndex);
  // }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
