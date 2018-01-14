import { Http } from "@angular/http";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import { Voucher } from "../../shared/index";


@Component({
  selector: "app-http-clients",
  templateUrl: "./http-clients.component.html",
  styleUrls: ["./http-clients.component.css"]
})
export class HttpClientsComponent implements OnInit {
  result: any;

  constructor(private httpClient: HttpClient, private http: Http) {}

  ngOnInit() {}

  getVouchers() {
    this.httpClient
      .get<Voucher[]>("http://localhost:5000/api/vouchers")
      .subscribe(data => {
        this.result = data;
      });
  }

  getVouchersHttp() {
    this.http
      .get("http://localhost:5000/api/vouchers")
      .map(response => response.json())
      .subscribe(data => {
        this.result = data;
      });
  }

  insertVoucher() {
    var voucher = { Text: "Inserted by Angular HttpClient", Date: new Date() };
    this.httpClient
      .post("http://localhost:5000/api/vouchers", voucher)
      .subscribe(data => {
        this.result = data;
      });
  }

  insertVoucherHttp() {
    var voucher = { Text: "Inserted by Angular Http", Date: new Date() };
    this.http
      .post("http://localhost:5000/api/vouchers", voucher)
      .map(response => response.json())
      .subscribe(data => {
        this.result = data;
      });
  } 

  usingHeadersHttpClient() {

    this.httpClient
      .get("http://localhost:5000/api/vouchers", {      
        observe: "response"
      })
      .toPromise()
      .then(data => {
        console.log('Response using {observe: "response"}: ',data);
        this.result = data;
      });

    var headers = new HttpHeaders();
    headers.set("Content-Type", "text/html; charset=utf-8")

    this.httpClient
      .get("http://localhost:5000/api/vouchers", {headers})
      .toPromise()
      .then(data => {
        console.log('Response using headers variable: ',data);
        this.result = data;
      });
  }
}
