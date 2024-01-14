import { Component } from '@angular/core';
import { getQuizCategories } from 'src/app/Models/enums/quiz-category.enum';

@Component({
  selector: 'app-search-flashcard',
  templateUrl: './search-flashcard.component.html',
  styleUrls: ['./search-flashcard.component.css']
})
export class SearchFlashcardComponent  {
  constructor(){}
  categories : String[] = getQuizCategories()
  sweetColors: string[] = [
    "#8892BF", // Gold
    "#F29C9F", // HotPink
    "#8CC84B", // SkyBlue
    "#F7CE5B", // BlueViolet
    "#3794CC", // Lime
    "#E44D26", // DarkOrchid
    "#5E738B", // Tomato
    "#21759B", // Teal
    "#000000", // OrangeRed
    "#F29559", 
    "#326CE5",// RoyalBlue
  ];
}
