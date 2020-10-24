
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLHelpers } from '../../../models/helpers.model';

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


  constructor(  private router: Router) { }

  
  ngOnInit() {

  }

  routerMenu(route: string) {
        this.router.navigate([route]);
  }

}
