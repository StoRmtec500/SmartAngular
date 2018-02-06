import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { SidePanelItem } from '../side-panel/side-panel-item';

@Injectable()
export class EventBusService {

  private sideCMDsArray: SidePanelItem [] = [];
  private sideCMDs: BehaviorSubject<SidePanelItem[]> = new BehaviorSubject(this.sideCMDsArray);
  public SideCMDs: Observable<SidePanelItem[]> = this.sideCMDs.asObservable();

  constructor() { }

  setSideCMDs(items: SidePanelItem[]){
    this.sideCMDsArray = items;
    this.sideCMDs.next(items);
  }

}
