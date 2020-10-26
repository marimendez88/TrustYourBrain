
import { Component, OnInit } from '@angular/core';
import { QuestionCategoryHelper } from './../../../models/helpers.model';


@Component({
  selector: 'app-quick-start-modal',
  templateUrl: './quick-start-modal.component.html',
  styleUrls: ['./quick-start-modal.component.scss'],
})
export class QuickStartModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const options = QuestionCategoryHelper;
  }

}
