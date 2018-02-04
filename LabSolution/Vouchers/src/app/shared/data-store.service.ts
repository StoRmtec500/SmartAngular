import { Injectable } from "@angular/core";
import { VouchersService } from "../vouchers/voucher.service";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs";
import { Voucher } from "./index";
import { SidePanelItem } from "./side-panel/side-panel-item";

@Injectable()
export class DataStoreService {
  
  private vouchersArray: Voucher[] = [];
  private vouchers: BehaviorSubject<Voucher[]> = new BehaviorSubject(this.vouchersArray);
  public Vouchers: Observable<Voucher[]> = this.vouchers.asObservable();

  private sideCMDsArray: SidePanelItem [] = [];
  private sideCMDs: BehaviorSubject<SidePanelItem[]> = new BehaviorSubject(this.sideCMDsArray);
  public SideCMDs: Observable<SidePanelItem[]> = this.sideCMDs.asObservable();


  constructor(private vs: VouchersService) {
    this.initVouchers();
    this.addLateVoucher();   
  }

  initVouchers(){
    this.vs.getVouchers().subscribe(data => {
      this.vouchersArray = data;
      this.vouchers.next(this.vouchersArray);
    });
  }

  addLateVoucher(){
    setTimeout(()=>{
      let v : Voucher ={
        "ID": 99,
        "Text": "Late Voucher",
        "Date": new Date().toString(),
        "Amount": 1000,
        "Paid": false,
        "Expense": false,
        "Remark": true,
        "Details": [
          {
            "ID": 4,
            "VoucherID": 2,
            "AccountID": 2,
            "Account": null,
            "Text": "Diesel",
            "Amount": 45,
            "Comment": null
          },
          {
            "ID": 6,
            "VoucherID": 2,
            "AccountID": 2,
            "Account": null,
            "Text": "Reifenwechsel",
            "Amount": 20,
            "Comment": null
          }
        ]
      }
      this.vouchersArray.push(v);
      this.vouchers.next(this.vouchersArray);
    }, 10000)
  }

  setSideCMDs(items: SidePanelItem[]){
    this.sideCMDsArray = items;
    this.sideCMDs.next(items);
  }
}
