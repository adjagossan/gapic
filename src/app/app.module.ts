import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { UserRepositoryComponent } from './user-repository/user-repository.component';

import { GithubService } from './github.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchUserComponent,
    UserRepositoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
