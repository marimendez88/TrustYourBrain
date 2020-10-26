import { 
  QuestionCategoryHelper, 
  QuestionCategoryIDHelper,
  QuestionDifficultyHelper,
  QuestionTypeIDHelper, 
  QuestionTypeNameHelper
 } 
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
  name: QuestionDifficultyHelper
}
export type TypeModel = {
  type: QuestionTypeIDHelper
  name: QuestionTypeNameHelper
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

