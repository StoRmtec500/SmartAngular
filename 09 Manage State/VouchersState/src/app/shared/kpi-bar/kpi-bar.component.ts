import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';
import { Voucher } from '../index';

@Component({
  selector: 'app-kpi-bar',
  templateUrl: './kpi-bar.component.html',
  styleUrls: ['./kpi-bar.component.scss']
})
export class KpiBarComponent implements OnInit {

  runningSum: number = 0;
  vouchers: Voucher[];

  constructor(private dataStore: DataStoreService) { }

  ngOnInit() {
    this.dataStore.Vouchers.subscribe((vouchers: Voucher[]) => {
      this.runningSum = 0;
      vouchers.forEach(item=>{
        this.runningSum += item.Amount;
      })
    })
  }

}
