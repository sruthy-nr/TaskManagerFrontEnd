import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getData(getData: any) {
    throw new Error('Method not implemented.');
  }
  title = 'TaskDelete';
}
