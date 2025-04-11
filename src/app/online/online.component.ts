import { Component } from '@angular/core';

@Component({
  selector: 'app-online',
  imports: [],
  templateUrl: './online.component.html',
  styleUrl: './online.component.css'
})

export class OnlineComponent {
  user_onOff = [
    {
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      user_name: "John Doe",
      last_message: "Hi there, How are you?",
      status: true,
      time: "09:00"
    }, 
    {
      avatar: "https://randomuser.me/api/portraits/women/78.jpg",
      user_name: "Jessie Woo",
      last_message: "Working with you like dream!",
      status: true,
      time: "08:50"
    },

  ]
}
