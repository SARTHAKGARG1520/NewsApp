import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListingComponent } from './news-listing/news-listing.component';

const routes: Routes = [{ path: '', component: NewsListingComponent }]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
