import { loadCategories, loadDifficulties, loadTypes } from './../actions/gameConfig.actions';


import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
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

	loadDifficulties$: Observable<typeof loadDifficulties> = createEffect((): any =>
		this.actions$.pipe(
			ofType(gameConfigActions.loadDifficulties),
			switchMap(
				() =>  
			this.gameConfigService.loadDifficulties().
				map(difficulty => {
				return gameConfigActions.loadDifficultiesSuccess({difficulty})
			}
					),
			),
		),
	);

	loadTypes$: Observable<typeof loadTypes> = createEffect((): any =>
		this.actions$.pipe(
			ofType(gameConfigActions.loadTypes),
			switchMap(
				() =>  
			this.gameConfigService.loadTypes().
				map(singleType => {
				return gameConfigActions.loadTypesSuccess({singleType})
			}
					),
			),
		),
	);


}