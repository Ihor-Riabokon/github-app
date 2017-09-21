import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import GitHub from '../../services/github';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export default class UserinfoComponent implements OnInit, OnDestroy {
  user_id: number;
  private sub: any;
  private user: any = {};
  private dataSource = {
    connect() {},
    disconnect() {}
  };
  displayedColumns = ['id', 'full_name'];

  constructor(private route: ActivatedRoute, public gitHub: GitHub) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.user_id = +params['id'];
      const git = this.gitHub;
      this.gitHub.getUsersList(this.user_id).subscribe(user => {
        console.log(git);
        this.user = user;
        this.dataSource = {
          connect() {
            console.log(git.getRepoList(user.repos_url));
            return git.getRepoList(user.repos_url);
          },
          disconnect() {}
        };
      });

      // this.dataSource = new ExampleDataSource(data);
        // this.gitHub.getUserInfo();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
