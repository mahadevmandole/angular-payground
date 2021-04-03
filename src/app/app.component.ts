import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-hello-world [name]="name"><app-hello-world>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-playground';
  name = 'first name';
}
