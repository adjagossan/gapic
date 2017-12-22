import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { UserRepositoryComponent } from './user-repository/user-repository.component';

import { GithubService } from './github.service';
import { UserDetailComponent } from './user-detail/user-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchUserComponent,
    UserRepositoryComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
