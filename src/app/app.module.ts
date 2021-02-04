import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyPipePipe } from './pipes/my-pipe.pipe';
import { RedDirective } from './Directive/red.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyPipePipe,
    RedDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
