export class Repos {

  private _name: string;
  private _html_url: string;

  constructor (name: string, htmlUrl: string) {
    this._name = name;
    this._html_url = htmlUrl;
  }

  get name(): string {
    return this._name;
  }

  get htmlUrl(): string {
    return this._html_url;
  }
}
