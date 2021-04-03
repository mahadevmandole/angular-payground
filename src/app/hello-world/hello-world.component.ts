import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
    <p>
      hello-world works!
    </p>
    <h1>Name -1 = {{name}}</h1>
    <h1>Name-2  ={{name2}}</h1>
    <app-hello-world-details><app-hello-world-details>
  `,
  styles: [
  ]
})
export class HelloWorldComponent implements OnInit {

  constructor() { }
  @Input() name: string;
  name2 = "this is may name";

  ngOnInit(): void {
  }

}
