import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetComponent } from './greet/greet.component';


 
@Component({
    selector: "my-app",
    standalone: true,
    imports: [ RouterOutlet, GreetComponent],
    template:'./app.component',
})
export class AppComponent {}