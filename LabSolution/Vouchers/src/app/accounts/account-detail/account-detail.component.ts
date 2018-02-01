import { Component, OnInit } from '@angular/core';
import { BalanceAccount } from '../../shared/index';
import { AccountsService } from '../account.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  account: BalanceAccount;
  constructor(private as: AccountsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.as.getAccount(this.route.snapshot.params['id']);
    

    //this.route.data
    //Accessing Query Params
    //var readonly = this.route.snapshot.queryParams['readonly'];
    //console.log(`Page is readonly: ${readonly}` )

    //Accessing Fragments
    //var section = this.route.snapshot.fragment;
    //if(section!=undefined) {
    //  console.log(`Section to navigate to: ${section}` )
    //}
  }
}
