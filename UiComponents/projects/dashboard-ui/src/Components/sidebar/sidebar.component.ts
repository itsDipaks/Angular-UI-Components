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
    {routerlink:"/home",icons:"home",name:"Coupen"},
    {routerlink:"/home",icons:"home",name:"Lists"},
    {routerlink:"/home",icons:"home",name:"Refer"},
  ]
  constructor(){
 
  }

}
