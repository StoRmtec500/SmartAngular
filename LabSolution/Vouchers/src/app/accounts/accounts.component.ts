import { AccountsService } from './account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BalanceAccount } from '../shared/model/model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts: BalanceAccount[];

  constructor(private router: Router, private service: AccountsService) { }

  ngOnInit() {
    this.service.getAccounts().subscribe(data => this.accounts = data)
  }

  showAccount(id: number){
    this.router.navigate(['/accounts/' + id]);
  }

  deleteAcccount(acct: BalanceAccount){
    this.service.deleteAccount(acct);
    this.router.navigate(['/accounts/']);
  }
}
