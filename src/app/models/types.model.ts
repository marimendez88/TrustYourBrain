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
  firebaseId: string,
  username: string,
  email: string,
  name?: string,
  lastName?: string,
}

export type QuestionModel = {
  category: CategoryModel,
  type: QuestionType,
  difficulty: QuestionDifficulty
  question: string,
  correct_answer: string,
  options: string[]
}
export type CategoryModel = {
  name: QuestionCategoryHelper,
  id: QuestionCategoryIDHelper,
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

