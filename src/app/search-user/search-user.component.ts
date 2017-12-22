import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Profil } from '../profil';
import { Repos } from '../repos';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  private profil: Profil;
  private repos: Observable<Repos[]>
  private repoUrl: string;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
  }

  getProfil(login: string) {

      this.githubService.currentLogin = login;

      this.githubService.currentProfil.subscribe(pf => {
        this.profil = pf;
        this.githubService.currentRepoUrl = this.profil["repos_url"];
        this.repos = this.githubService.currentRepo;
      });

  }

}
