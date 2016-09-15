import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
     <h2>{{my_date | date:'medium'}}</h2>`
})
export class AppComponent {
  my_date = "2016-09-05T14:30:45Z";
 }
