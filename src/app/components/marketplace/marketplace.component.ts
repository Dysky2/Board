import { Component, inject, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { OnInit, AfterViewInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import {v4 as uuidv4} from 'uuid';
import { BaseComponent } from '../base/base.component';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { userService } from '../../services/users.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.css'
})
export class MarketplaceComponent extends BaseComponent implements OnInit {
  @ViewChild('drawer' , { static: true }) public drawer!: MatDrawer

  private _snackBar = inject(MatSnackBar);

  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  filters: string[] = ['fmfqwqwf', 'fqwkwqfkqfw','gsdgsd','b63346','fdhdh','ehrehrerh'];
  products: Product[] = [];
  selectedProduct: Product[] = [];

  counterValue: number = 1;

  constructor(private firebaseService: FirebaseService, private router: Router, private route: ActivatedRoute, private productService: ProductService, private authService: AuthService, public dialog: MatDialog, public userService: userService) {
    super();
  }

  ngOnInit(): void {
    // this.firebaseService.getProducts().subscribe((products) => {
    //   this.products = Object.values(products);
    // })
    console.log(localStorage.getItem('token'));

    this.productService.getAllProducts().subscribe((allProducts) => {
      console.log(allProducts)  
      console.log(allProducts);
      this.products = allProducts;
    })
  }

  isNullOrUndefind(value: any): boolean {
    return value === null && value === undefined && value === '';
  }

  // createNewProduct() {
  //   let photos = ['chair1.jpg', 'sofa1.jpg', 'szafa1.jpg'];
  //   let name = ['chair', 'sofa', 'szafa', 'wardrobe', 'bed'];
  //   let category = ['living room', 'bathroom', 'bedroom', 'kitchen'];
  //   let colors = ['black', 'white', 'brown', 'yellow', 'grey', 'purple', 'red', 'green']

  //   function getNumber(number: number) {
  //     return Math.floor(Math.random() * number)
  //   }

  //   let nameAndPhotos = getNumber(2)

  //   for(let i = 0; i < 2; i++) {
  //     this.productService.addProduct({
  //       productId: `${uuidv4()}`,
  //       name: `${name[nameAndPhotos]}`,
  //       photo: `${photos[getNumber(4)]}`,
  //       price: getNumber(500),
  //       color: `${colors[getNumber(5)]}`,
  //       category: `${category[getNumber(3)]}`,
  //       dimensions: `W ${getNumber(700)} H ${getNumber(500)}`
  //     } as Product).subscribe((done) => console.log(done))
  //   }
  // }

  incrementValue(step: string) {
    if(step !== '99') {
      this.counterValue++;
    }
  }

  decrement(step: string) {
    if(step !== '1') {
      this.counterValue--;
    }
  }

  onDrawerClose() {
    this.counterValue = 1;
    this.router.navigate(['/marketplace']);
  }

  addToCart(product: Product) {
    // this._snackBar.open('Product was added to cart', 'close', {
    //   duration: 3000
    // });
    this.drawer.close();

    this.firebaseService.getProducts().subscribe( (products) => {
      if(localStorage.getItem('token') !== '') {
        this.firebaseService.addProductToUser(localStorage.getItem('token') as string, product, this.counterValue, this.firebaseService.findProductId(products, product.productId)).subscribe()
      }
    });

    // switchMap(value => this.firebaseService.findProductId(value, product.id)),
    // tap(value => console.log(value))

    // console.log(product);

    // this.dialog.open(DialogCartComponent,{ 
    //   width: '900px',
    //   height: 'auto',
    //   data: {product: product},
    // })
  }

  productSelect(product: Product) {
    // console.log(product);
    this.router.navigate(['./', product.productId], {relativeTo: this.route});
    this.selectedProduct = [product];
  }

  isTheLastItem(items: string[], item: string): boolean {
    return items.indexOf(item) === items.length - 1;
  }
}
