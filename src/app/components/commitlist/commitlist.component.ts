import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import slideInOutAnimation from '../../animation/slideout';
import { Http, Response } from '@angular/http';
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-commitlist',
  templateUrl: './commitlist.component.html',
  styleUrls: ['./commitlist.component.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export default class CommitlistComponent implements OnInit, OnDestroy {
  repo_id: number;
  user_id: number;
  repo: any = {};
  private sub: any;
  private dataSource: any;
  displayedColumns = ['id', 'full_name'];

  constructor(private route: ActivatedRoute, public http: Http) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.user_id = +params['user'];
      this.repo_id = params['reponame'];

      this.http.get(`https://api.github.com/repos/${this.user_id}/${this.repo_id}`)
        .map((res:Response) => res.json())
        .map(repo => {
          this.repo = repo;
          console.log(repo.commits_url.slice(0, -6));

          this.dataSource = new EDataSource(

            this.http.get(repo.commits_url.slice(0, -6))
              .map(res => res.json())
            )
          }).subscribe();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  back() {
    window.history.back();
  }
}


class EDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: any) {
    super();
  }

  connect() {
    return this._exampleDatabase;
  }

  disconnect() { }
}
