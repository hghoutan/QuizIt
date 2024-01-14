import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
  //   RouterModule.forChild([
  //     { path: 'Create-quiz', loadChildren: () => import('../../Pages/create-quiz/create-quiz.module').then(m => m.CreateQuizModule) },
  //  ])
  ],
  exports: [NavbarComponent, CommonModule],
})
export class NavbarModule { }
