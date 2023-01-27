import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularRouting';
  constructor(private api:ApiService) {
    this.getData();
  }
  getData() {
    this.api.getPostdata().subscribe(data=> {console.log(data)});
  }
}

