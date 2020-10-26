

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionModel } from './../../models/types.model';
import { categoriesOptionsConfig } from './../../shared/consts/categories.const';


@Injectable({
  providedIn: 'root'
})
export class GameConfigService {

  constructor() { 

  }

  loadCategories () {
    return categoriesOptionsConfig
  }

}
