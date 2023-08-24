import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'loading',pathMatch:'full'},
  {path:'loading',
  loadChildren:()=> import('./screens/loading/loading.module').then(m=>m.LoadingPageModule)},
  {
    path: 'login',
    loadChildren: () => import('./screens/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./screens/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./screens/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./screens/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'place-order',
    loadChildren: () => import('./screens/place-order/place-order.module').then( m => m.PlaceOrderPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./screens/location/location.module').then( m => m.LocationPageModule)
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
 