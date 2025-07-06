import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    {
      category: 'MARKETING', 
      routerItems: [
        {
          routeLink: 'dashboard',
          icon: 'apps',
          label: 'Dashboard',
        },
        {
          routeLink: 'marketplace',
          icon: 'inventory_2',
          label: 'Marketplace',
        },
        {
          routeLink: 'orders',
          icon: 'shopping_basket',
          label: 'Orders',
        },
        {
          routeLink: 'tracking',
          icon: 'local_shipping',
          label: 'Tracking',
        },
        {
          routeLink: 'settings',
          icon: 'settings',
          label: 'Customers',
        },
        {
          routeLink: 'settings',
          icon: 'settings',
          label: 'Discounts',
        },
      ]
    },
    {
      category: 'PAYMENT',
      routerItems: [
        {
          routeLink: 'leggder',
          icon: 'apps',
          label: 'Ledger',
        },
        {
          routeLink: 'products',
          icon: 'inventory_2',
          label: 'Taxes',
        },
      ]
    },
    {
      category: 'SYSTEM',
      routerItems: [
        {
          routeLink: 'settings',
          icon: 'settings',
          label: 'Setting',
        },
        {
          routeLink: 'products',
          icon: 'inventory_2',
          label: 'Dark mode',
        },
      ]
    }
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }
}
