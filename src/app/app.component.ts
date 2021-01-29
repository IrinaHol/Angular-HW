import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    name: 'Ira',
    age: 123
  };

  name = new FormControl('', [this.customBadValidator]);
  age = new FormControl('', [Validators.required, Validators.minLength(5)]);
  myForm = new FormGroup({name: this.name, age: this.age});

  xxx(myForm: FormGroup): void {
    console.log(myForm);
  }

  customBadValidator(data: AbstractControl): any {
    console.log('text');
    if (data.value === 'bad') {
      return {
        error: true,
        msg: 'it is bad words'
      };
    }
  }
}


//
//   onInputAction(xxx: HTMLInputElement): void {
//     console.log(xxx.value);
//   }
//
//   submit(form: NgForm): void {
//     console.log(form.value);
//   }
// }
