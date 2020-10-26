import { CategoryModel, DifficultyModel, TypeModel } from './../../models/types.model';
import { createAction, props } from '@ngrx/store';


export const loadCategories = createAction(
	'[Categories] loadCategories'
);

export const loadCategoriesSuccess = createAction(
	'[Categories] loadCategoriesSuccess',
	props<{ category: CategoryModel }>(),
);

export const loadCategoriesError = createAction(
	'[Categories] loadCategoriesError',
	props<{ payload: any }>(),
);


export const loadDifficulties = createAction(
  '[Difficulties] loadDifficulties'
);

export const loadDifficultiesSuccess = createAction(
  '[Difficulties] loadDifficultiesSuccess',
	props<{ difficulty: DifficultyModel }>(),
);

export const loadTypes = createAction(
  '[Types] loadTypes'
);
export const loadTypesSuccess = createAction(
  '[Types] loadTypesSuccess',
	props<{ singleType: TypeModel }>(),
);

