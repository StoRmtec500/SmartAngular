import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BalanceAccount } from "../shared/index";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AccountsService {
  constructor(private httpClient: HttpClient) {}

  accounts = null;

  getAccounts(): Observable<BalanceAccount[]> {
    return this.httpClient.get<BalanceAccount[]>("http://localhost:5000/api/accounts");
  }

  getAccount(id: number): Observable<BalanceAccount> {
    return this.httpClient.get<BalanceAccount>("http://localhost:5000/api/accounts/" + id);
  }

  insertAccount(acct: BalanceAccount): void {
    this.httpClient.post("http://localhost:5000/api/accounts", acct);
  }

  updateAccount(acct: BalanceAccount) {
    this.httpClient.put("http://localhost:5000/api/accounts", acct);
  }
}
