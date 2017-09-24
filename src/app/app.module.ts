import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import  InitialComponent  from './components/initial/initial.component';
import  UserinfoComponent  from './components/userinfo/userinfo.component';
import  CommitlistComponent  from './components/commitlist/commitlist.component';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MdTableModule,
  MdFormFieldModule,
  MdCardModule,
  MdDialogModule,
  MdButtonModule
} from '@angular/material';

const appRoutes: Routes = [
  { path: '', component: InitialComponent },
  { path: 'userinfo/:id', component: UserinfoComponent  },
  { path: 'commitlist/:user/:reponame', component: CommitlistComponent  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserAnimationsModule,
    HttpModule,
    BrowserModule,
    MdFormFieldModule,
    MdTableModule,
    MdCardModule,
    MdDialogModule,
    MdButtonModule
  ],
  declarations: [
    AppComponent,
    InitialComponent,
    UserinfoComponent,
    CommitlistComponent,
  ],
  exports: [
    InitialComponent,
    UserinfoComponent,
    CommitlistComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

