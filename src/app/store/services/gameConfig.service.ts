

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionModel } from './../../models/types.model';
import { categoriesOptionsConfig,
  difficultiesConfig,
  typesConfig
} from '../../shared/consts/questions.const';


@Injectable({
  providedIn: 'root'
})
export class GameConfigService {

  constructor() { 

  }

  loadCategories () {
    return categoriesOptionsConfig
  }
  loadDifficulties () {
    return difficultiesConfig
  }
  loadTypes () {
    return typesConfig
  }

}
