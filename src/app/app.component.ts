import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { OnlineComponent } from './online/online.component';
import { BoxComponent } from './box/box.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    SearchComponent,
    OnlineComponent,
    BoxComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
