import { Injectable } from "@angular/core";
import { VouchersService } from "../vouchers/voucher.service";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs";
import { Voucher } from "./index";

@Injectable()
export class DataStoreService {
  private arrVs: Voucher[] = [];
  private vouchers: BehaviorSubject<Voucher[]> = new BehaviorSubject(
    this.arrVs
  );

  public Vouchers: Observable<Voucher[]> = this.vouchers.asObservable();

  constructor(private vs: VouchersService) {
    this.vs.getVouchers().subscribe(data => {
      data.forEach(item => {
        this.arrVs.push(item);
        this.vouchers.next(this.arrVs);
      });
    });

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
      this.arrVs.push(v);
      this.vouchers.next(this.arrVs);
    }, 10000)
  }
}
