import { Component, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OnChanges, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
];

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnChanges, OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(private fb: FormBuilder, private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    if(localStorage.getItem('token') !== '') {
      this.firebaseService.getCart(localStorage.getItem('token') as string).subscribe((kosz) => {
          console.log(kosz);
      })
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  } 

  active(element: HTMLElement) {
    element.classList.add('card-active');
  }


  // cartGroup = this.fb.group({

  // })

}
