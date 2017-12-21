import { Repos } from './repos';

/* User's profil */
export class Profil {

  private _login: string;
  private _avatar_url: string;
  private _name: string;
  private _followers: number;
  private _following: number;
  private _repos: number;
  private _repos_url: string;
  private _reposInfo: Repos[];

  constructor (login: string, avatarUrl: string, name: string,
     followers: number, following: number, repos: number, reposUrl: string){
    this._login = login;
    this._avatar_url = avatarUrl;
    this._name = name;
    this._followers = followers;
    this._following = following;
    this._repos = repos;
    this._repos_url = reposUrl;
  }

  get login(): string {
    return this._login;
  }

  get avatarUrl(): string {
    return this._avatar_url;
  }

  get name(): string {
    return this._name;
  }

  get followers(): number {
    return this._followers;
  }

  get following(): number {
    return this._following;
  }

  get repos(): number {
    return this._repos;
  }

  get reposUrl(): string {
    return this._repos_url;
  }

  get reposInfo(): Repos[] {
    return this._reposInfo;
  }

  set reposInfo(reposInfo) {
    this._reposInfo = reposInfo;
  }

  addRepo(repository: Repos): Repos[] {
    this._reposInfo.push(repository);
    return this._reposInfo;
  }

}
