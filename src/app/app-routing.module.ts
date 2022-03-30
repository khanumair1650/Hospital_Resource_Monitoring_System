import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'greet',
    loadChildren: () => import('./pages/greet/greet.module').then( m => m.GreetPageModule)
  },
  {
    path: 'adminlog',
    loadChildren: () => import('./pages/adminlog/adminlog.module').then( m => m.AdminlogPageModule)
  },
  {
    path: 'admingreet',
    loadChildren: () => import('./pages/admingreet/admingreet.module').then( m => m.AdmingreetPageModule)
  }
 
  
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
