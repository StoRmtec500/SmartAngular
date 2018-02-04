import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../index';
import { SidePanelItem, ICmdAction } from './side-panel-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {

  cmds : SidePanelItem[];

  constructor(private router: Router, private Store: DataStoreService) { }

  ngOnInit() {
    this.Store.SideCMDs.subscribe(items=>this.cmds = items);
  }

  executeAction(action : ICmdAction){
    action();
  }

}
