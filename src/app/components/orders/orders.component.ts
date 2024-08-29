import { Component, inject, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';

export interface OrdersElements {
  postion: number,
  orderId: string,
  products: string[],
  departureDate: string,
  deliveryDate: string,
  ordersStatus: string,
  deliveryStatus: string,
  destination: string,
  price: number,
}


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  selection = new SelectionModel<OrdersElements>(true, []);
  toppings = new FormControl('');

  private _liveAnnouncer = inject(LiveAnnouncer);
  private data: OrdersElements[] = [
    {postion: 1, orderId: '!@#$%', products: ['sting', 'strjgg', 'faskfaks', 'fasaf'], departureDate: '22 July 2024', deliveryDate: '12 August 2024', 
      ordersStatus: 'completed', deliveryStatus: 'Ready to pickup', destination: 'Kraków ul. Wielka', price: 986},
    {postion: 2, orderId: '423', products: ['sting', 'strjgg'], departureDate: '22 July 2004', deliveryDate:'12 August 2024', 
      ordersStatus: 'In progress', deliveryStatus: 'Canceled', destination: 'Kraków ul. Wielka', price: 543},
    {postion: 3, orderId: '24235', products: ['sting', 'strjgg'], departureDate: '22 July 2004', deliveryDate:'12 August 2024', 
      ordersStatus: 'In progress', deliveryStatus: 'Canceled', destination: 'Kraków ul. Wielka', price: 222},
    {postion: 4, orderId: '!@#$%', products: ['sting', 'strjgg', 'faskfaks', 'fasaf'], departureDate: '22 July 2004', deliveryDate:'12 August 2024', 
      ordersStatus: 'completed', deliveryStatus: 'Ready to pickup', destination: 'Kraków ul. Wielka', price: 986},
    {postion: 5, orderId: '423', products: ['sting', 'strjgg'], departureDate: '22 July 2004', deliveryDate:'12 August 2024', 
      ordersStatus: 'In progress', deliveryStatus: 'Canceled', destination: 'Kraków ul. Wielka', price: 543},
    {postion: 6, orderId: '24235', products: ['sting', 'strjgg'], departureDate: '22 July 2004', deliveryDate:'12 August 2024', 
      ordersStatus: 'In progress', deliveryStatus: 'Canceled', destination: 'Kraków ul. Wielka', price: 222},
    {postion: 7, orderId: '!@#$%', products: ['sting', 'strjgg', 'faskfaks', 'fasaf'], departureDate: '22 July 2004', deliveryDate:'12 August 2024', 
      ordersStatus: 'completed', deliveryStatus: 'Ready to pickup', destination: 'Kraków ul. Wielka', price: 986},
    {postion: 8, orderId: '423', products: ['sting', 'strjgg'], departureDate: '22 July 2004', deliveryDate:'12 August 2024', 
      ordersStatus: 'In progress', deliveryStatus: 'Canceled', destination: 'Kraków ul. Wielka', price: 543},
    {postion: 9, orderId: '24235', products: ['sting', 'strjgg'], departureDate: '22 July 2004', deliveryDate:'12 August 2024', 
      ordersStatus: 'In progress', deliveryStatus: 'Canceled', destination: 'Kraków ul. Wielka', price: 222},
    {postion: 10, orderId: '!@#$%', products: ['sting', 'strjgg', 'faskfaks', 'fasaf'], departureDate: '22 July 2004', deliveryDate:'12 August 2024', 
      ordersStatus: 'completed', deliveryStatus: 'Ready to pickup', destination: 'Kraków ul. Wielka', price: 986},
    {postion: 11, orderId: '423', products: ['sting', 'strjgg'], departureDate: '22 July 2004', deliveryDate:'12 August 2024', 
      ordersStatus: 'In progress', deliveryStatus: 'Canceled', destination: 'Kraków ul. Wielka', price: 543},
    {postion: 12, orderId: '24235', products: ['sting', 'strjgg'], departureDate: '22 July 2004', deliveryDate:'12 August 2024', 
      ordersStatus: 'In progress', deliveryStatus: 'Canceled', destination: 'Kraków ul. Wielka', price: 222},
    {postion: 13, orderId: '!@#$%', products: ['sting', 'strjgg', 'faskfaks', 'fasaf'], departureDate: '22 July 2004', deliveryDate:'12 August 2024', 
      ordersStatus: 'completed', deliveryStatus: 'Ready to pickup', destination: 'Kraków ul. Wielka', price: 986},
    {postion: 14, orderId: '423', products: ['sting', 'strjgg'], departureDate: '22 July 2004', deliveryDate:'12 August 2024', 
      ordersStatus: 'In progress', deliveryStatus: 'Canceled', destination: 'Kraków ul. Wielka', price: 543},
    {postion: 15, orderId: '24235', products: ['sting', 'strjgg'], departureDate: '22 July 2004', deliveryDate:'12 August 2024', 
      ordersStatus: 'In progress', deliveryStatus: 'Canceled', destination: 'Kraków ul. Wielka', price: 222},
  ];

  displayedColumns: string[] = ['actions', 'postion','orderId', 'products', 'departureDate', 'deliveryDate', 'ordersStatus', 'deliveryStatus', 'destination', 'price'];
  dataSource = new MatTableDataSource(this.data);

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  filters: string[] = ['fmfqwqwf', 'fqwkwqfkqfw','gsdgsd','b63346','fdhdh','ehrehrerh'];

  constructor() {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: OrdersElements): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.postion + 1}`;
  }

  isTheLastItem(items: string[], item: string): boolean {
    return items.indexOf(item) === items.length - 1;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
