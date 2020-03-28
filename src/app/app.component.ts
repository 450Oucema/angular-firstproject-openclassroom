import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    isAuth = false;

    appareils = [
      {
        name: 'Machine à laver',
        status: 'Éteint'
      },
      {
        name: 'Télévision',
        status: 'Allumé'
      },
      {
        name: 'Ordinateur',
        status: 'Éteint'
      }
    ];
    constructor() {
      setTimeout(
        () => {
          this.isAuth = true;
        }, 4000
      );
    }
    onAllumer() {
      console.log('On allume tout !');
    }
}
