import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListingComponent } from './news-listing.component';

describe('NewsListingComponent', () => {
  let component: NewsListingComponent;
  let fixture: ComponentFixture<NewsListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsListingComponent]
    });
    fixture = TestBed.createComponent(NewsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
