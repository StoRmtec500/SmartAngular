import { Http } from "@angular/http";
import { AppSettings } from "../../app.settings";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Voucher } from "../../shared/index";

@Component({
  selector: "app-promise",
  templateUrl: "./promise.component.html",
  styleUrls: ["./promise.component.css"]
})
export class PromiseComponent implements OnInit {
  constructor(private httpClient: HttpClient, private http: Http) {}

  result: any;
  resultB: any;
  resultC: any;

  ngOnInit() {}

  getVouchers() {
    this.httpClient
      .get("http://localhost:5000/api/vouchers")
      .toPromise()
      .then(data => {
        this.result = data;
        console.log("getVouchers()", this.result);
      });
  }

  getVouchersTask() {
    this.httpClient
      .get("http://localhost:5000/api/vouchers/asyncArray")
      .toPromise()
      .then(data => {
        this.result = data;
        console.log("getVouchers()", this.result);
      });
  }

  getVoucher() {
    this.httpClient
      .get("http://localhost:5000/api/vouchers/2")
      .toPromise()
      .then(data => {
        this.result = data;
        console.log("getVoucher()", this.result);
      });
  }

  insertVoucher() {
    var voucher = { Text: "Inserted by Angular", Date: new Date() };
    console.log("Voucher to insert: ", voucher)
    this.httpClient
      .post("http://localhost:5000/api/vouchers", voucher)
      .toPromise()
      .then(response => {
        if (response == null) this.result = "Voucher inserted";
      });
  }

  updateVoucher() {
    var voucher: Voucher;

    this.httpClient
      .get("http://localhost:5000/api/vouchers/2")
      .toPromise()
      .then(data => {
        let voucher: Voucher = <Voucher>data;
        voucher.Text = "Updated by Angular";
        console.log("Voucher to update: ", voucher)
        this.httpClient
          .put("http://localhost:5000/api/vouchers", voucher)
          .toPromise()
          .then(data => {
            this.result ="voucher updated";
          });
      });
  }

  deleteVoucher() {
    var id = 1002;
    var url = "http://localhost:5000/api/vouchers/" + id;
    this.httpClient
      .delete(url)
      .toPromise()
      .then(response => {
        this.result = `voucher with id ${id} deleted`;
        console.log(this.result);
      });
  }

  getSum() {
    //Notice that we are using http here instead of HttpClient
    //HttpClient has a bug expecting Json - here a string is returned from api - public string GetSum(bool expenses)
    //Eighter return a Json string, use Interceptor or use http in this case
    //https://github.com/angular/angular/issues/18396
    this.http
      .get("http://localhost:5000/api/vouchers/getsum/true")
      .toPromise()
      .then(response => {
        this.resultB = response;
        console.log("getSum()", this.resultB);
      });
  } 

  getVM() {
    this.httpClient
      .get("http://localhost:5000/api/vouchers/getvm/1")
      .toPromise()
      .then(response => {
        this.resultB = response;
        console.log("getVM()", this.resultB);
      });
  }

  doSave() {
    let voucher = {
      ID: 2,
      Text: "BP Tankstelle",
      Date: "2017-06-27T14:30:04.8849651",
      Amount: 65,
      Paid: false,
      Expense: true,
      Remark: true
    };

    console.log("Saving voucher ", voucher)
    this.httpClient
      .post("http://localhost:5000/api/vouchers/save", voucher)
      .toPromise()
      .then(
        response => (this.resultB = `Voucher with id ${response} was saved`)
      );
  }
}
