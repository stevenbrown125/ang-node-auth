import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Hello {{title}}</h1><messages></messages>',
  
})
export class AppComponent {
  title = 'Message Board';
}
