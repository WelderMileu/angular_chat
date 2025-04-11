import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { OnlineComponent } from './online/online.component';
import { BoxComponent } from './box/box.component';
import { SendComponent } from './send/send.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    SearchComponent,
    OnlineComponent,
    BoxComponent,
    SendComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
