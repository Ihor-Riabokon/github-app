import {Component, OnInit} from '@angular/core';
import slideInOutAnimation from '../../animation/slideout';
import {DataSource} from '@angular/cdk/collections';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css'],
  animations: [slideInOutAnimation]
})
export default class InitialComponent implements OnInit {
  displayedColumns = ['id', 'avatar', 'userName', 'profile'];
  dataSource: any;

  constructor(private http: Http) {}

  ngOnInit() {
    this.dataSource = new EDataSource(this.http.get(`https://api.github.com/users`)
      .map((res:Response) => res.json())
      .map(res => res.length ? res.map(row => {
        row.userInfo = `userinfo/${row.id}`;
        row.preview = `https://avatars0.githubusercontent.com/u/${row.id}?v=4&size=30`;
        return row;
      }) : res)
      .catch((error:any) => Observable.throw(error || 'Server error')));
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
