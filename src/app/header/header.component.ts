import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  items_m = [
    { name: "home", activate: false },
    { name: "chat", activate: true },
    { name: "contacts", activate: false },
    { name: "settings", activate: false },
    { name: "faqs", activate: false },
    { name: "terms of use", activate: false },
  ]
}
