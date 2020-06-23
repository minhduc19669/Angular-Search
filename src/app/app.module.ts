import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchService } from './search.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListArticleComponent,
    DetailArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
