import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-dialog-cart',
  templateUrl: './dialog-cart.component.html',
  styleUrl: './dialog-cart.component.css'
})
export class DialogCartComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {product: Product}) {

  }
}
