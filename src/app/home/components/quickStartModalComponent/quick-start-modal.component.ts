
import { Component, OnInit } from '@angular/core';
import { QuestionCategoryHelper } from './../../../models/helpers.model';
import { CategoryModel, DifficultyModel, TypeModel } from './../../../models/types.model';
import { Store } from '@ngrx/store';
import { RootState, GameState } from './../../../models/states.model';

@Component({
  selector: 'app-quick-start-modal',
  templateUrl: './quick-start-modal.component.html',
  styleUrls: ['./quick-start-modal.component.scss'],
})
export class QuickStartModalComponent implements OnInit {

  constructor(private store: Store<RootState>) { }

  categories: CategoryModel[] = [];
  difficulties: DifficultyModel[] = [];
  types: TypeModel[] = [];



  game = {
    selectedCategory: null,
    questionsPool: null,
    selectedDifficulty: null,
    selectedType: null,
    quantity: null
  }
  

  quantities = [
    {
      number: '5'
    },
    {
      number: '10'
    },
    {
      number: '20'
    },
    {
      number: '30'
    },
  ]

  ngOnInit() {

    this.openSubscriptions();

    console.log(this.categories)
    console.log(this.types)
    console.log(this.difficulties)
  }

  private openSubscriptions() {
    this.store.select('gameConfig').subscribe(gameState => {
      this.difficulties = gameState.difficulties
      this.types = gameState.types
      this.categories = gameState.categories
    })
  }

  print(){
    console.log(this.game)
  }

}
