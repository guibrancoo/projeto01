import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response {
  id: number;
  name: string;
  descripition: string;
  html_url: string;
}

interface Responsev {
  id: number;
  name: string;
  descripition: string;
  html_url: string;
}
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repos: Response;
  repositorio: Responsev;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.update();
    this.update2();
  }

  update() {
    this.http.get<Response>('https://api.github.com/users/pedrohgaffonso/repos')
       .subscribe(data => {
      this.repos = data;
    });
  }
  update2() {
    this.http.get<Responsev>('https://api.github.com/users/guibrancoo/repos')
       .subscribe(data => {
      this.repositorio = data;
    });
  }
}
