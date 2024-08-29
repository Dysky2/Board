import { Component } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent implements OnDestroy {
  private subscriptions = new Subscription();

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
