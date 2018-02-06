import { VouchersService } from './voucher.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Voucher } from '../shared/model/model';
import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../shared/event-bus/event-bus.service';
import { VOUCHER_ADD } from '../shared/event-bus/action.types';

@Component({
  selector: 'app-vouchers-list',
  templateUrl: './vouchers-list.component.html',
  styleUrls: ['./vouchers-list.component.css']
})
export class VouchersListComponent implements OnInit {
  
  vouchers: Voucher[];
 
  constructor(private router: Router, private vs: VouchersService, private ebus: EventBusService) {  }

  ngOnInit() {   
    this.vs.getVouchers().subscribe(data => this.vouchers = data)
    this.ebus.setSideCMDs([{title: "Add Voucher", action: VOUCHER_ADD}])
    this.ebus.SideEvt.subscribe(this.evalAction);
  }

  evalAction(action: string){
    console.log("receiving action from side panel: " + action)
  }

  showVoucher(id: number){
    this.router.navigate(['/vouchers/' + id]);
  }

  deleteVoucher(v: Voucher){
    this.vs.deleteVoucher(v.ID).subscribe(data => this.router.navigate(['/vouchers/']))
  }

  addVoucher():void {
    console.log("adding a voucher")
    this.router.navigate(['/vouchers/' + 0]);
  }
}
