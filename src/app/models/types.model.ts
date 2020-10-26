import { 
  QuestionCategoryHelper, 
  QuestionCategoryIDHelper,
  QuestionType, 
  QuestionDifficulty } 
  from './helpers.model';


export type UserModel = {
  firebaseId: string,
  username: string,
  email: string,
  name?: string,
  lastName?: string,
}

export type QuestionsModel = {
  questions: QuestionModel[]
}

export type QuestionModel = {
  category: CategoryModel,
  type: TypeModel,
  difficulty: DifficultyModel
  question: string,
  correct_answer: string,
  options: questionOptionsModel[]
}

export type questionOptionsModel = {
  option: string,
  correct: boolean  
}
export type CategoryModel = {
  name: QuestionCategoryHelper,
  id: QuestionCategoryIDHelper,
}
export type DifficultyModel = {
  difficulty: QuestionDifficulty
}
export type TypeModel = {
  type: QuestionType
}

export type LeaderBoardModel = {
  firebaseId: string,
  username: string,
  email: string,
  name?: string,
  lastName?: string,
}


export type GeneralInformationModel = {
  firebaseId: string,
  username: string,
  email: string,
  name?: string,
  lastName?: string,
}

