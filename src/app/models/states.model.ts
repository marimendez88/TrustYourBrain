
import { 
   QuestionModel,
   CategoryModel, 
   UserModel, 
   DifficultyModel,
   TypeModel
  } from './types.model'

export type RootState = {
  // user: UsersState,
  // game: GameState,
  // previousGames: GameState[],
  gameConfig: GameConfigState
} 
export type GameState = {
  selectedCategories: CategoryModel[],
  questionsPool: QuestionModel[],
  selectedDifficulty: DifficultyModel,
  selectedType: TypeModel
}
export type UsersState = {
  user: UserModel,
  level: number,
  points: number,
}
export type GameConfigState = {
  categories: CategoryModel [],
  difficulties: DifficultyModel[],
  types: TypeModel[]
}



