import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';

@Injectable()
export default class GitHub{

    private github: any;
    private githubApi = 'https://api.github.com';

    constructor(private http: Http){
        console.log('LOL SHTO?');
    }


   getUsersList(id?: Number) {
        return this.http.get(`${this.githubApi}/users` + (id ? `/${id}` : ''))
            .map((res:Response) => res.json())
            .map(res => res.length ? res.map(row => {
              row.userInfo = `userinfo/${row.id}`;
              row.preview = `https://avatars0.githubusercontent.com/u/${row.id}?v=4&size=30`;
              return row;
            }) : res)
            .catch((error:any) => Observable.throw(error || 'Server error'));
   }

   getRepoList(repoUrl) {
     return this.http.get(repoUrl)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));


   }


}
