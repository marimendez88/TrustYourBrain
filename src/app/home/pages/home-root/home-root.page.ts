import { GameConfigService } from './../../../store/services/gameConfig.service';
import { RootState } from './../../../models/states.model';


import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { CategoryModel } from './../../../models/types.model';
import { loadCategories } from './../../../store/actions/gameConfig.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-root',
  templateUrl: 'home-root.page.html',
  styleUrls: ['home-root.page.scss'],
})
export class HomeRootPage {

  categories: CategoryModel[] = [];

  // categories$: Observable<CategoryModel[]> = this.store.select(state => state?.gameConfig?.categories);

  constructor(private store: Store<RootState>,
    private gameConfigService: GameConfigService) {}

  ngOnInit(): void {

  //  this.categories = this.gameConfigService.loadCategories();



  // console.log( this.store.subscribe(res => {
  //   console.log(res)
  // }))

  // this.store.select(state => {
  //   state?.gameConfig
  // }).subscribe();
  //   gameConfig).subscribe((rootState => {
  //    console.log(rootState)
  //    this.categories = rootState.gameConfig?.categories
  //  }))
    //  this.categories$.subscribe((categories) => {
    //    console.log(categories);  
    //    this.categories = categories} );
		// this.subscribe((response) => {
    //     console.log(response)
    //   });

    this.store.dispatch(loadCategories({categories: this.categories}));
	}

}
