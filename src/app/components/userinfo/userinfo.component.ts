import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import slideInOutAnimation from '../../animation/slideout';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Rx';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css'],
  animations: [slideInOutAnimation]
})
export default class UserinfoComponent implements OnInit, OnDestroy {
  user_id: number;
  private sub: any;
  private user: any = {};
  private dataSource: any;

  displayedColumns = ['id', 'full_name', 'commits'];

  constructor(private route: ActivatedRoute, private http: Http) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.user_id = +params['id'];
      this.http.get(`https://api.github.com/users/${this.user_id}`)
        .map((res:Response) => res.json())
        .map(user => {
          this.user = user;
          console.log(user.repos_url)
          this.dataSource = new EDataSource(
            this.http.get(user.repos_url)
              .map(res => res.json())
              .catch((error:any) => Observable.throw(error || 'Server error'))
          );
        })
        .catch((error:any) => Observable.throw(error || 'Server error')).subscribe();
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
