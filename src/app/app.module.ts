import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import  InitialComponent  from './components/initial/initial.component';
import  MainComponent  from './components/main/main.component';
import  RepoinfoComponent  from './components/repoinfo/repoinfo.component';
import  UserinfoComponent  from './components/userinfo/userinfo.component';
import  CommitlistComponent  from './components/commitlist/commitlist.component';
import gitHub from './services/github';
import { HttpModule, JsonpModule } from '@angular/http';
import {DataSource} from '@angular/cdk/collections';

import {
  MdTableModule,
  MdFormFieldModule,
  MdFormFieldControl
} from '@angular/material';


const appRoutes: Routes = [
  { path: '', component: InitialComponent },
  { path: 'main', component: MainComponent  },
  { path: 'userinfo/:id', component: UserinfoComponent  },
  { path: 'repoinfo', component: RepoinfoComponent  },
  { path: 'commitlist', component: CommitlistComponent  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpModule,
    BrowserModule,
    MdFormFieldModule,
    MdTableModule,
  ],
  declarations: [
    AppComponent,
    InitialComponent,
    MainComponent,
    UserinfoComponent,
    RepoinfoComponent,
    CommitlistComponent
  ],
  providers: [
    gitHub

  ],
  exports: [
    InitialComponent,
    MainComponent,
    UserinfoComponent,
    RepoinfoComponent,
    CommitlistComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

