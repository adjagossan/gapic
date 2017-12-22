import { Component, OnInit, Input } from '@angular/core';
import { Repos } from '../repos';

@Component({
  selector: 'app-user-repository',
  templateUrl: './user-repository.component.html',
  styleUrls: ['./user-repository.component.css']
})
export class UserRepositoryComponent implements OnInit {

  @Input() repos: Repos[];

  constructor() { }

  ngOnInit() {
  }

}
