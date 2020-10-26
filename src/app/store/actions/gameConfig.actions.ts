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
  '[Difficulties] loadDifficulties',
	props<{ difficulties: DifficultyModel[] }>(),
);

export const loadTypes = createAction(
  '[Types] loadTypes',
	props<{ types: TypeModel[] }>(),
);

