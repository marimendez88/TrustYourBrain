import { GameConfigService } from './../../../store/services/gameConfig.service';
import { RootState } from './../../../models/states.model';


import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { CategoryModel, DifficultyModel, TypeModel } from './../../../models/types.model';
import { loadCategories } from './../../../store/actions/gameConfig.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-root',
  templateUrl: 'home-root.page.html',
  styleUrls: ['home-root.page.scss'],
})
export class HomeRootPage {

  categories: CategoryModel[] = [];
  difficulty: DifficultyModel[] = [];
  types: TypeModel[] = [];


  constructor(private store: Store<RootState>) {}

  ngOnInit(): void {

    this.loadConfigData();

    this.openSubscriptions();
      
      console.log(this.categories)
      console.log(this.types)
      console.log(this.difficulty)


  }
  
  private loadConfigData() {
    this.store.dispatch(loadCategories());
    // TODO:   this.store.dispatch(loadTypes()); 
    // TODO:  this.store.dispatch(loadDifficulties());
  }
  private openSubscriptions() {
    this.store.select('gameConfig').subscribe(gameState => {
      this.difficulty = gameState.difficulties
      this.types = gameState.types
      this.categories = gameState.categories
    })
  }

}
