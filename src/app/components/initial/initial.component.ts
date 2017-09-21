import { Component, OnInit } from '@angular/core';
import GitHub from '../../services/github';
import {DataSource} from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export default class InitialComponent implements OnInit {
  private users: any;
  displayedColumns = ['id', 'userName'];
  dataSource: any = [];

  ngOnInit() {

  }

  constructor(public gitHub: GitHub) {
      const data = this.gitHub.getUsersList();
       this.dataSource = new ExampleDataSource(data);
   }

}

class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: any) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect() {
    return this._exampleDatabase;
  }

  disconnect() { }
}
