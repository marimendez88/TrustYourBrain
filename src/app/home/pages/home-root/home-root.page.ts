
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

  categories: CategoryModel[] = [];
  difficulties: DifficultyModel[] = [];
  types: TypeModel[] = [];


  constructor(private store: Store<RootState>, 
    private storeService: StoreService) {}

  ngOnInit(): void {

    this.storeService.startConfigLoading();

    this.openSubscriptions();
      
      console.log(this.categories)
      console.log(this.types)
      console.log(this.difficulties)


  }

  private openSubscriptions() {
    this.store.select('gameConfig').subscribe(gameState => {
      this.difficulties = gameState.difficulties
      this.types = gameState.types
      this.categories = gameState.categories
    })
  }

}
