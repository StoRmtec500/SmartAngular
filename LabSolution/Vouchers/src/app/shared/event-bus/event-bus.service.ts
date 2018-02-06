import { Injectable } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { SidePanelItem } from '../side-panel/side-panel-item';

@Injectable()
export class EventBusService {

  private sideCMDsArray: SidePanelItem [] = [];
  private sideCMDs: BehaviorSubject<SidePanelItem[]> = new BehaviorSubject(this.sideCMDsArray);
  public SideCMDs: Observable<SidePanelItem[]> = this.sideCMDs.asObservable();

  private sideEvt: Subject<string> = new Subject<string>()
  public SideEvt: Observable<string> = this.sideEvt.asObservable();

  constructor() { }

  setSideCMDs(items: SidePanelItem[]){
    this.sideCMDsArray = items;
    this.sideCMDs.next(items);
  }

  triggerAction(action: string){
    this.sideEvt.next(action);
  }

}

// https://stackoverflow.com/questions/34700438/global-events-in-angular

// https://www.blackpepper.co.uk/what-we-think/blog/simple-message-bus-with-angular
