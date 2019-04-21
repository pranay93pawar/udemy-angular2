import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPassword = false;
  numberOfClicks = 0;
  clicksArray = [];

  onShowDetailsClicked() {
    this.showPassword = !this.showPassword;
    this.numberOfClicks += 1;
    this.clicksArray.push(new Date());
  }
}
