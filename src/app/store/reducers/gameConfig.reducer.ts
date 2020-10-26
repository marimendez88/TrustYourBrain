

import { createReducer, on } from '@ngrx/store';
import { 
	loadCategories, 
	loadDifficulties, 
	loadDifficultiesSuccess, 
	loadTypes,
	loadTypesSuccess,
	loadQuestions, 
	loadCategoriesError, 
	loadCategoriesSuccess
} from '../actions';
import { GameConfigState } from './../../models/states.model';


export const GameConfigInitialState: GameConfigState = {
	categories: [],
	difficulties: [],
	types: [],
	error: null, 
};


const _gameConfigReducer = createReducer(
	GameConfigInitialState,
	
	on(loadCategories, (state) => ({
		...state,
	})),

	on(loadCategoriesSuccess, (state, { category }) => ({
		...state,
		categories: [...state.categories, category],
		error: false
	})),

	on(loadCategoriesError, (state, { payload }) => ({
		...state,
		error: true
	})),

	on(loadDifficulties, (state) => ({
		...state,
	})),

	on(loadDifficultiesSuccess, (state, { difficulty }) => ({
		...state,
		difficulties: [...state.difficulties, difficulty],
		error: false
	})),
	
	on(loadTypes, (state) => ({
		...state,
	})),

	on(loadTypesSuccess, (state, { singleType }) => ({
		...state,
		types: [...state.types, singleType],
		error: false
	})),

	on(loadQuestions, (state) => ({
		...state
	})),
);

export function gameConfigReducer(state: GameConfigState, action) {
	return _gameConfigReducer(state, action);
}
