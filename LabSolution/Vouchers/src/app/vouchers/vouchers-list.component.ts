import { VouchersService } from './voucher.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Voucher } from '../shared/model/model';
import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../shared/index';


@Component({
  selector: 'app-vouchers-list',
  templateUrl: './vouchers-list.component.html',
  styleUrls: ['./vouchers-list.component.css']
})
export class VouchersListComponent implements OnInit {
  
  vouchers: Voucher[];
 
  constructor(private router: Router, private vs: VouchersService, private Store: DataStoreService) {  }

  ngOnInit() {   
    this.vs.getVouchers().subscribe(data => this.vouchers = data)
    this.Store.setSideCMDs([{title: "Add Voucher", evt: this.addVoucher}])
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
