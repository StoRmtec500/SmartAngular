import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../index';
import { SidePanelItem } from './side-panel-item';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {

  cmds : SidePanelItem[];

  constructor(private Store: DataStoreService) { }

  ngOnInit() {
    this.Store.SideCMDs.subscribe(items=>this.cmds = items);
  }

}
