import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { OnInit, AfterViewInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import {v4 as uuidv4} from 'uuid';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.css'
})
export class MarketplaceComponent extends BaseComponent implements OnInit {
  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  filters: string[] = ['fmfqwqwf', 'fqwkwqfkqfw','gsdgsd','b63346','fdhdh','ehrehrerh'];

  products: Product[] = []; 

  constructor(private firebaseService: FirebaseService) {
    super();
  }

  ngOnInit(): void {
    this.firebaseService.getProducts().subscribe((products) => {
      this.products = Object.values(products);
    })
  }

  createNewProduct() {
    let photos = ['chair1.jpg', 'sofa1.jpg', 'szafa1.jpg'];
    let name = ['chair', 'sofa', 'szafa'];
    let category = ['living room', 'bathroom', 'bedroom', 'kitchen'];
    let colors = ['black', 'white', 'brown', 'yellow', 'grey', 'purple']

    function getNumber(number: number) {
      return Math.floor(Math.random() * number)
    }

    let nameAndPhotos = getNumber(2)

    for(let i = 0; i < 10; i++) {
      this.firebaseService.addProduct('gsdg43', {
        id: `${uuidv4()}`,
        name: `${name[nameAndPhotos]}`,
        photo: `${photos[nameAndPhotos]}`,
        price: getNumber(100),
        color: `${colors[getNumber(5)]}`,
        category: `${category[getNumber(3)]}`,
        dimensions: `W ${getNumber(700)} H ${getNumber(500)}`
      }).subscribe((done) => console.log(done))
    }
  }

  isTheLastItem(items: string[], item: string): boolean {
    return items.indexOf(item) === items.length - 1;
  }
}
