import { loadCategories } from './../actions/gameConfig.actions';


import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType , Effect} from '@ngrx/effects';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import * as gameConfigActions from '../actions/gameConfig.actions';
import { GameConfigService } from './../services/gameConfig.service';
import { Observable } from 'rxjs';

@Injectable()
export class GameConfigEffects {
  constructor(
    private actions$: Actions, 
    private gameConfigService: GameConfigService) 
		{}
		
		@Effect({dispatch: false})
	loadCategories$: Observable<typeof loadCategories> = createEffect((): any =>
		this.actions$.pipe(
			ofType(gameConfigActions.loadCategories),
			switchMap(
				() =>  
			this.gameConfigService.loadCategories().
				map(category => {
				return gameConfigActions.loadCategoriesSuccess({category})}
					),
			),
		),
	);

}