import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'changer-app';
  ngOnInit(){
    console.log("add " + this.title)
  }
  
}
