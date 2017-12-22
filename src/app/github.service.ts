import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Profil } from './profil';
import { Repos } from './repos';
import { githubApiBaseUrl } from './util';

@Injectable()
export class GithubService {

  private _currentLogin: string;
  private _currentRepoUrl: string;
  private _currentProfil: Observable<Profil>;
  private _currentRepo: Observable<Repos>;

  constructor(private http: HttpClient) { }

  private getUserProfil (login: string): void {
    this._currentProfil = this.http.get<Profil>(githubApiBaseUrl + 'users/' + login);
  }

  private getUserRepository (url: string): void {
    this._currentRepo = this.http.get<Repos>(url);
  }

  get currentProfil(): Observable<Profil> {
    return this._currentProfil;
  }

  get currentRepo(): Observable<Repos> {
    return this._currentRepo;
  }

  get currentLogin(): string {
    return this._currentLogin;
  }

  set currentLogin(login: string) {
    this._currentLogin = login;
    this.getUserProfil(login);
  }

  get currentRepoUrl(): string {
    return this._currentRepoUrl;
  }

  set currentRepoUrl(repoUrl: string) {
    this._currentRepoUrl = repoUrl;
    this.getUserRepository(repoUrl);
  }

}
