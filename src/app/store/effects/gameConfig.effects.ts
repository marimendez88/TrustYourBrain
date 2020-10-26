

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as gameConfigActions from '../actions/gameConfig.actions';
import { GameConfigService } from './../services/gameConfig.service';

@Injectable()
export class GameConfigEffects {
  constructor(
    private actions$: Actions, 
    private gameConfigService: GameConfigService) 
    {}

	loadCategories$: any = createEffect((): any =>
		this.actions$.pipe(
			ofType(gameConfigActions.loadCategories),
			mergeMap(() => this.gameConfigService.loadCategories())
			)
	);
}
