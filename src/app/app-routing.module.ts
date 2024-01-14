import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./Pages/home-page/home.module').then(m => m.HomeModule) },
  { path: '**', loadChildren: () => import('./Pages/four0four/four0four.module').then(m => m.Four0fourModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
