import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { OrdersComponent } from './components/orders/orders.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { authGuard } from './auth/auth.guard';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path: 'home', component: LayoutComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'marketplace', component: MarketplaceComponent, children: [
    {path: ':id', component: MarketplaceComponent},
  ]},
  {path: 'orders', component: OrdersComponent, canActivate: [authGuard]},
  {path: 'tracking', component: TrackingComponent},
  {path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
