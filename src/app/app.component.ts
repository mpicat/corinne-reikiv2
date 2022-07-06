import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'corinne-reikiv2';

  onActivate(event: any): void {
    window.scroll(0,0);
  }
}
