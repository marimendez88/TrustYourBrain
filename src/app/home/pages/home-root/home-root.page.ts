
import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreService } from './../../../store/services/store.service';
import { RootState } from './../../../models/states.model';
import { CategoryModel, DifficultyModel, TypeModel } from './../../../models/types.model';



@Component({
  selector: 'app-home-root',
  templateUrl: 'home-root.page.html',
  styleUrls: ['home-root.page.scss'],
})
export class HomeRootPage {

  constructor(private store: Store<RootState>, 
    private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.startConfigLoading();  
  }
}
