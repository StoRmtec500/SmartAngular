import { Component, OnInit } from "@angular/core";
import { BalanceAccount } from "../../shared/index";
import { AccountsService } from "../account.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-account-detail",
  templateUrl: "./account-detail.component.html",
  styleUrls: ["./account-detail.component.css"]
})
export class AccountDetailComponent implements OnInit {
  account: BalanceAccount = { ID: 0, Name: "", Expense: false, ActivatedOn : new Date(), Deprecated: false };

  constructor(
    private service: AccountsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params["id"];

    if (id != 0) {
      this.service
        .getAccount(this.route.snapshot.params["id"])
        .subscribe(acct => (this.account = acct));
    }
  }

  saveAcct() {
    if (this.account.ID == 0) {
      this.service.insertAccount(this.account);
    } else {
      this.service.updateAccount(this.account);
    }
  }
}
