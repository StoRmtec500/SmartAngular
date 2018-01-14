import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { DemoService } from "../demo.service";
import { Observable } from "rxjs/Observable";
import { MediaItem } from "../media-item";
import { Voucher } from "../../shared/index";

@Component({
  selector: "app-observables",
  templateUrl: "./observables.component.html",
  styleUrls: ["./observables.component.css"]
})
export class ObservablesComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    private http: Http,
    private ds: DemoService
  ) {}

  result: any;
  resultB: any;
  resultC: any;
  media: Observable<MediaItem[]>;
  current: Observable<MediaItem[]>;
  upcoming: Observable<MediaItem[]>;

  ngOnInit() {
    this.media = this.ds.getMedia();
    this.splitMedia();
  }

  splitMedia(){
    let dt = new Date();
    this.current = this.media.map(mis =>
      mis.filter(mi => mi.startTime < new Date())
    );
    this.upcoming = this.media.map(mis =>
      mis.filter(mi => mi.startTime >= new Date())
    );
  }

  getVouchers() {
    this.httpClient
      .get("http://localhost:5000/api/vouchers")
      .subscribe(data => {
        this.result = data;
      });
  }

  getVoucher() {
    this.httpClient
      .get("http://localhost:5000/api/vouchers/2")
      .subscribe(data => {
        this.result = data;
      });
  }

  insertVoucher() {
    var voucher = { Text: "Inserted by Angular", Date: new Date() };
    this.httpClient
      .post("http://localhost:5000/api/vouchers", voucher)
      .subscribe(data => {
        this.result = data;
      });
  }

  updateVoucher() {
    var voucher: Voucher;

    this.httpClient
      .get("http://localhost:5000/api/vouchers/2")
      .subscribe(data => {
        let voucher: Voucher = <Voucher>data;
        voucher.Text = "Updated by Angular";

        this.httpClient
          .put("http://localhost:5000/api/vouchers", voucher)
          .subscribe(data => {
            console.log("voucher updated", voucher);
            this.result = data;
          });
      });
  }

  deleteVoucher() {
    var id = 1002;
    var url = "http://localhost:5000/api/vouchers/" + id;
    this.httpClient.delete(url).subscribe(data => {
      console.log("voucher deleted");
      this.result = data;
    });
  }

  getSum() {
    this.httpClient
      .get("http://localhost:5000/api/vouchers/getsum/true")
      .subscribe(data => {
        this.resultB = data;
      });
  }

  getVM() {
    this.httpClient
      .get("http://localhost:5000/api/vouchers/getvm/1")
      .subscribe(data => {
        this.resultB = data;
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

    this.httpClient
      .post("http://localhost:5000/api/vouchers/save", voucher)
      .subscribe(data => {
        this.resultB = data;
      });
  }

  getVouchersFilter() {
    this.http
      .get("http://localhost:5000/api/vouchers")
      .map(response => response.json())
      .filter(data => data.json().deleted == false)
      .subscribe(data => {
        this.result = data;
      });
  }
}
