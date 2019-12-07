import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'return-product-list',
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
  { path: 'store-list', loadChildren: './store-list/store-list.module#StoreListPageModule' },
  { path: 'store-add', loadChildren: './store-add/store-add.module#StoreAddPageModule' },
  { path: 'store-edit', loadChildren: './store-edit/store-edit.module#StoreEditPageModule' },
  { path: 'shop-list', loadChildren: './shop-list/shop-list.module#ShopListPageModule' },
  { path: 'shop-add', loadChildren: './shop-add/shop-add.module#ShopAddPageModule' },
  { path: 'product-list', loadChildren: './product-list/product-list.module#ProductListPageModule' },
  { path: 'product-add', loadChildren: './product-add/product-add.module#ProductAddPageModule' },
  { path: 'return-product-list', loadChildren: './return-product-list/return-product-list.module#ReturnProductListPageModule' },
  { path: 'return-product-add', loadChildren: './return-product-add/return-product-add.module#ReturnProductAddPageModule' }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
