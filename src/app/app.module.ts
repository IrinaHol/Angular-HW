import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/users/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { ChosenUserComponent } from './components/chosen-user/chosen-user.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    ChosenUserComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{
        path: 'link/users',
        component: UsersComponent, children: [
          {
            path: `:id`,
            component: ChosenUserComponent
          }
        ]
      }
      ]
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
