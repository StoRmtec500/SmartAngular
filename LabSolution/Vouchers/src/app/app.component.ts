import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlSegment } from '@angular/router/src/url_tree';
import { RouterEvent, NavigationEnd } from '@angular/router';


@Component({
  selector: 'vouchers-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isRoot: boolean;

  constructor(private router: Router){
    
  }

  ngOnInit() {  
    this.subsRouteChange();
   };

  subsRouteChange(){
    this.router.events.subscribe((evt:RouterEvent) => {
      if(evt.url!=undefined){
        this.isRoot = evt.url == "/";
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
