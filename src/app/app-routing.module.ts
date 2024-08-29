import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { OrdersComponent } from './components/orders/orders.component';
import { TrackingComponent } from './components/tracking/tracking.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard' , pathMatch: 'full'},
  {path: 'home', component: LayoutComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'marketplace', component: MarketplaceComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'tracking', component: TrackingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
