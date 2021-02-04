import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework practice';

  asyncValue = new Promise(resolve => {
    setTimeout(() => {
      resolve('It is asyncValue');
    }, 1000);
  });

  date = new Date();
  price = 100;

  user = {name: 'Oleg', age: 40, status: true};

  e = 2.4546345804885;
}
