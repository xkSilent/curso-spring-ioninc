import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Categorias', url: '/categorias'  },
    { title: 'Profile', url: '/profile'  }
  ];
  constructor() {}

}
