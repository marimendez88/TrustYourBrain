
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { URLHelpers, MenuOptionsHelpers } from '../../../models/helpers.model';
import { QuickStartModalComponent } from '../quickStartModalComponent/quick-start-modal.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {


  menuOptions = [
    { 
      name: MenuOptionsHelpers.QUICK_START,
      route: URLHelpers.MAIN 
    },
    { 
      name: MenuOptionsHelpers.RANDOM_GAME,
      route: URLHelpers.HOME 
    },
    { 
      name: MenuOptionsHelpers.LEADER_BOARD,
      route: URLHelpers.HOME 
    },
    { 
      name: MenuOptionsHelpers.MORE, 
      route: URLHelpers.HOME 
    },
    { 
      name: MenuOptionsHelpers.EXIT,
      route: URLHelpers.EXIT 
    },

  ];


  constructor(  
    private router: Router,
    public modalController: ModalController ) { }

  
  ngOnInit() {

  }

  routerMenu(route: string) {
   console.log('clicking')
    if(route === URLHelpers.MAIN){
    this.openQuickStartModal();
    }
    else{
      this.router.navigate([route]);
    }
        
  }

  async openQuickStartModal (){
    const modal = await this.modalController.create({
      component: QuickStartModalComponent,
      cssClass: ['tyb-modal', 'auto-height'] ,
      componentProps: {

      }
    });
    modal.present();
    modal.onDidDismiss().then((response) => {
      console.log(response)
      if (response.role === 'backdrop') {
        return;
    }
      // this.router.navigate([URLHelpers.MAIN]);
    });
  }
}


