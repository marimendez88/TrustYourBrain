import { QuestionCategoryHelper, QuestionDifficulty, QuestionType } from './helpers.model';
import { QuestionModel , CategoryModel, UserModel} from './types.model'

export type RootState = {
  user: [],
  game: [],
  previousGames: [],
  generalInformation: []
} 

export type UsersState = {
  user: UserModel,
  level: number,
  points: number,
}
export type GameState = {
  selectedCategories: CategoryModel[],
  questionsPool: QuestionModel[],
  selectedDifficulty: QuestionType,
}

export type QuestionsState = {
  user: UserModel,
  level: number,
  points: number,
}
