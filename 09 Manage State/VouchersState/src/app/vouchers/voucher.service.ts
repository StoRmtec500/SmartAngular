
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Voucher } from "../shared/index";
import { Observable } from 'rxjs';

@Injectable()
export class VouchersService {
    constructor(private httpClient: HttpClient) { }

    vouchers = null;

    getVouchers() : Observable<Voucher[]> {
        return this.httpClient.get<Voucher[]>('http://localhost:5000/api/vouchers');          
    }
    
    getVoucher(id: number) : Observable<any> {
        return this.httpClient.get<Voucher>('http://localhost:5000/api/vouchers/getvm/' + id);
      }

    insertVoucher(voucher: Voucher) : void {                
        this.httpClient.post('http://localhost:5000/api/vouchers', voucher)
            .subscribe(()=>console.log(`voucher with id ${voucher.ID} inserted`), 
            (err)=> console.log(err));            
    }

    updateVoucher(voucher: Voucher) : void {
        this.httpClient.put('http://localhost:5000/api/vouchers', voucher)
            .subscribe(()=>console.log(`voucher with id ${voucher.ID} updated`), 
            (err)=> console.log(err));
    }

    deleteVoucher(id: number) : void {
        var url = "http://localhost:5000/api/vouchers/" + id;
        this.httpClient.delete(url)
            .subscribe(()=>console.log(`voucher with id ${id} deleted`), 
            (err)=> console.log(err));
    }
}