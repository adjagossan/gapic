import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../github.service';
import { Profil } from '../profil';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() profil: Profil;
  
  constructor(private githubService: GithubService) { }

  ngOnInit() {
  }


}
