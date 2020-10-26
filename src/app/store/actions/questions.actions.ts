import { QuestionsModel } from './../../models/types.model';
import { createAction, props } from '@ngrx/store';


export const loadQuestions = createAction(
	'[GitUsers] uploadUsers',
	props<{ questions: QuestionsModel }>(),
);

