

import { createReducer, on } from '@ngrx/store';
import { loadCategories, loadDifficulties, loadQuestions} from '../actions';
import { GameConfigState } from './../../models/states.model';


export const GameConfigInitialState: GameConfigState = {
	categories: [],
	difficulties: [],
	types: []
};


const _gameConfigReducer = createReducer(
	GameConfigInitialState,
	
	on(loadCategories, (state) => ({
		...state,
	})),

	on(loadDifficulties, (state) => ({
		...state,
	})),

	on(loadQuestions, (state) => ({
		...state
	})),
);

export function gameConfigReducer(state: GameConfigState, action) {
	return _gameConfigReducer(state, action);
}
