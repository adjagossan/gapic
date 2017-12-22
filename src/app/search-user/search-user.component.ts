import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  constructor(private githubService: GithubService) { }

  ngOnInit() {
  }

  getProfil(login: string) {

      this.githubService.currentLogin = login;
      this.githubService.currentProfil
      .subscribe(
        data => {
          console.log(data);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('An error occured: ',err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        }
      );
  }

}
