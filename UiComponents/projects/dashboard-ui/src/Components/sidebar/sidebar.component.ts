import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  routes=[
    {routerlink:"/home" ,icons:"home",name:"Home"},
    {routerlink:"/dashboard",icons:"dashboard",name:"Dashboard"},
    {routerlink:"/coupen",icons:"home",name:"Coupen"}
  ]
  constructor(){
 
  }

}
