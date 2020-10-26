import { RootState } from './../../models/states.model';
import { Store } from '@ngrx/store';
import { loadCategories } from '../actions/gameConfig.actions';



import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private store: Store<RootState>) { 

  }

  startConfigLoading () {
    this.store.dispatch(loadCategories());
    // TODO:   this.store.dispatch(loadTypes()); 
    // TODO:  this.store.dispatch(loadDifficulties());
  }

}
