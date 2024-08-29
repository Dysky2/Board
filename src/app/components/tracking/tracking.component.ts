import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.css'
})
export class TrackingComponent {
  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  transports = [
    {
      status: 'On route',
      statusClass: 'on-route',
      route: 'Madrid - Malaga',
      distance: '529 km',
      time: '5 h 27 min',
      image: '/img/truck1.jpg',
      locations: ['18001 Granada', '29001 Malaga'],
    },
    {
      status: 'Waiting',
      statusClass: 'waiting',
      route: 'Madrid - Roma',
      distance: '1959 km',
      time: '20 h 34 min',
      image: 'path_to_truck_image.png',
      locations: ['28001 Madrid', '00100 Roma'],
    },
  ];


}
