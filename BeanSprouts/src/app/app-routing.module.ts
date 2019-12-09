import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-list',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'user-list', loadChildren: './user-list/user-list.module#UserListPageModule' },
  { path: 'user-add', loadChildren: './user-add/user-add.module#UserAddPageModule' },
  { path: 'user-edit', loadChildren: './user-edit/user-edit.module#UserEditPageModule' },
  { path: 'truck-list', loadChildren: './truck-list/truck-list.module#TruckListPageModule' },
  { path: 'truck-add', loadChildren: './truck-add/truck-add.module#TruckAddPageModule' },
  { path: 'truck-edit', loadChildren: './truck-edit/truck-edit.module#TruckEditPageModule' },
  { path: 'order', loadChildren: './order/order.module#OrderPageModule' },
  { path: 'mainmenu', loadChildren: './mainmenu/mainmenu.module#MainmenuPageModule' },
  { path: 'loginpage', loadChildren: './loginpage/loginpage.module#LoginpagePageModule' },
  { path: 'customer-list', loadChildren: './customer-list/customer-list.module#CustomerListPageModule' },
  { path: 'customer-add', loadChildren: './customer-add/customer-add.module#CustomerAddPageModule' },
  { path: 'customer-edit', loadChildren: './customer-edit/customer-edit.module#CustomerEditPageModule' },
  { path: 'bill-list', loadChildren: './bill-list/bill-list.module#BillListPageModule' },
  { path: 'bill-table', loadChildren: './bill-table/bill-table.module#BillTablePageModule' },
  { path: 'bill-add', loadChildren: './bill-add/bill-add.module#BillAddPageModule' },  { path: 'bill-edit-data', loadChildren: './bill-edit-data/bill-edit-data.module#BillEditDataPageModule' },
  { path: 'order-list', loadChildren: './order-list/order-list.module#OrderListPageModule' },
  { path: 'order-add', loadChildren: './order-add/order-add.module#OrderAddPageModule' },
  { path: 'order-detail', loadChildren: './order-detail/order-detail.module#OrderDetailPageModule' },
  { path: 'order-edit', loadChildren: './order-edit/order-edit.module#OrderEditPageModule' }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
