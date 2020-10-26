
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { URLHelpers } from '../../../models/helpers.model';
import { QuickStartModalComponent } from '../quickStartModalComponent/quick-start-modal.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {


  menuOptions = [
    { 
      name: 'quick start',
      route: URLHelpers.MAIN 
    },
    { 
      name: 'random game',
      route: URLHelpers.HOME 
    },
    { 
      name: 'leader board',
      route: URLHelpers.HOME 
    },

    { 
      name: 'about ',
      route: URLHelpers.HOME 
    },
    { 
      name: 'Exit',
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


