
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Person } from '../../shared/index';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.css']
})
export class NestedComponent implements OnInit {

  showNested: boolean;

  employees: Person [] =  [
    {name: "Heinz", gender: "male", age: 12}, 
    {name: "Brunhilde", gender: "female", age: 22},
    {name: "Susi", gender: "female", age: 45}];
    
  constructor() { }

  ngOnInit() {
    this.showNested = true;
  }

  changeView(val: boolean){
    this.showNested = val;
  }

}
