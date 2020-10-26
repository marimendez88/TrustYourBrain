import { RootState } from './../../models/states.model';
import { Store } from '@ngrx/store';
import {
  loadCategories,
        loadDifficulties,
        loadTypes
 } from '../actions/gameConfig.actions';



import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private store: Store<RootState>) { 

  }

  startConfigLoading () {
    this.store.dispatch(loadCategories());
    this.store.dispatch(loadDifficulties());
    this.store.dispatch(loadTypes()); 
  }

}
