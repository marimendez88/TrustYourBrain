import { CategoryModel, DifficultyModel, TypeModel } from './../../models/types.model';
import { createAction, props } from '@ngrx/store';


export const loadCategories = createAction(
	'[Categories] loadCategories',
	props<{ categories: CategoryModel[] }>(),
);

// export const loadCategoriesSuccess = createAction(
// 	'[Categories] loadCategories',
// 	props<{ categories: CategoryModel[] }>(),
// );

export const loadDifficulties = createAction(
  '[Difficulties] loadDifficulties',
	props<{ difficulties: DifficultyModel[] }>(),
);

export const loadTypes = createAction(
  '[Types] loadTypes',
	props<{ types: TypeModel[] }>(),
);

