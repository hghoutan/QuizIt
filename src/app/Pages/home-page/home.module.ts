import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AllQuizzesComponent } from 'src/app/Pages/All-quizzes/all-quizzes.component';
import { DisplayQuizComponent } from 'src/app/Components/Display-quiz/display-quiz.component';
import { SearchFlashcardComponent } from 'src/app/Components/Search-flashcard/search-flashcard.component';
import { SidebarComponent } from 'src/app/Components/sidebar/sidebar.component';
import { NavbarModule } from 'src/app/Components/navbar/navbar.module';



// const routes: Routes = [
//   {
//     path: '', component: HomePageComponent,
//     children: [
//       { path: 'Home', children: [{ path: '', component: HomePageComponent }] },
//       { path: '', redirectTo: '/Home', pathMatch: 'full' }
//     ]
//   },
//   { path: '', redirectTo: '/Home', pathMatch: 'full' }
// ]

@NgModule({
  declarations: [
    HomePageComponent,
    SidebarComponent,
    SearchFlashcardComponent,
    AllQuizzesComponent,
    DisplayQuizComponent,
    HomePageComponent,
    
],
  imports: [
    CommonModule,
    FormsModule,
    NavbarModule,
    RouterModule.forChild([
      { path: 'Home', component: HomePageComponent },
      { path: 'Search', component: SearchFlashcardComponent },
      { path: 'All-quizzes', component: AllQuizzesComponent },
      { path: 'Create-quiz', loadChildren: () => import('../create-quiz/create-quiz.module').then(m => m.CreateQuizModule) },
      { path: '', redirectTo: '/Home', pathMatch: 'full' },
   ])
  ],
  exports: []
})
export class HomeModule { }
