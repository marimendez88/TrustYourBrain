
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLHelpers } from '../../../models/helpers.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(  private router: Router) { }

  
  ngOnInit() {

  }

  routerMenu(key: string) {
    switch(key){
      case URLHelpers.HOME:
        this.router.navigate([URLHelpers.HOME]);
        break;
      case URLHelpers.EXIT:
        this.router.navigate([URLHelpers.EXIT]);
        break;
      case URLHelpers.MAIN:
          this.router.navigate([URLHelpers.MAIN]);
          break;
        
    }

  }

}
