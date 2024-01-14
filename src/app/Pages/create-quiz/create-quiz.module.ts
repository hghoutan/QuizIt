import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateQuizComponent } from './create-quiz.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarModule } from 'src/app/Components/navbar/navbar.module';

@NgModule({
  declarations: [
    CreateQuizComponent,    
],
  imports: [
    CommonModule,
    FormsModule,
    NavbarModule,
    ReactiveFormsModule,
    RouterModule.forChild([
        {
          path: '',
          component: CreateQuizComponent
        }
      ]),
  ],
})
export class CreateQuizModule {}