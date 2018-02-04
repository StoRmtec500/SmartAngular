import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterEvent, NavigationEnd, Route } from '@angular/router';


@Component({
  selector: 'vouchers-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  children: string [];
  isRoot: boolean;

  constructor(private router: Router, private route: ActivatedRoute){
     
  }

  ngOnInit() {  
    this.evalIsRootOrChild();
   };

  evalIsRootOrChild(){
    this.children = this.router.config[0].children.map((item: Route)=>{return item.path});
    this.router.events.subscribe((evt:RouterEvent) => {
      if(evt.url!=undefined){
        let isChildRoute  = this.children.find(item=>evt.url.includes(item)) != undefined
        this.isRoot = evt.url == "/" || isChildRoute ? true: false;
      }
  })
  }
 
  showSidepanel(){
    return this.isRoot ? "none" : "block";
  }

  setSideDivWidth(){
    return this.isRoot ? 'flexSideHidden' : 'panel flexSide'
  }

  setSpacer(){
    return this.isRoot ? '' : 'flexSpacer'
  }

  setMainDivWidth(){
    return this.isRoot ? 'flexMainBig' : 'panel flexMain'
  }
}
