import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VouchersService } from '../voucher.service';
import { Voucher, VoucherDetail, BalanceAccount } from '../../shared/index';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})
export class VoucherComponent implements OnInit {

  voucher: Voucher = null;
  accounts: BalanceAccount[] = null;
  currentDetail: VoucherDetail;

  constructor(private vs: VouchersService, private route: ActivatedRoute) {   }

  ngOnInit() {
    this.voucher = new Voucher();

    this.vs.getVoucher(this.route.snapshot.params['id']).subscribe(data => {

      if(data.CurrentVoucher!=null){
        this.voucher = data.CurrentVoucher;
      }     
      this.accounts = data.Accounts;
      
      if (this.voucher.Details == undefined || this.voucher.Details==null)
      {
        this.voucher.Details = new Array<VoucherDetail>();
        this.addDetail(new VoucherDetail())
      }
      this.currentDetail = this.voucher.Details[0];
    });
  }

  saveVoucher(){
    if(this.voucher.ID==undefined){
      this.vs.insertVoucher(this.voucher);
    }else{
      this.vs.updateVoucher(this.voucher);
    }
  }

  selectDetail(detail:VoucherDetail){
    this.currentDetail = detail;
  }

  addDetail(detail:VoucherDetail){   
    detail.TempId = UUID.UUID();
    this.voucher.Details.push(detail);
    this.currentDetail = detail;
  }

  saveDetail(detail:VoucherDetail){
    let idx = detail.TempId!=null ? this.voucher.Details.findIndex(item=>item.TempId == detail.TempId) : this.voucher.Details.findIndex(item=>item.ID == detail.ID);
    this.voucher.Details.splice(idx,1);       
    detail.Account = this.accounts.find(item=>item.ID == detail.AccountID);
    this.voucher.Details.push(detail)
  }
}
