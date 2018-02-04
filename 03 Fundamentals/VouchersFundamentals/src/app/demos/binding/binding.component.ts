
import { Component, OnInit } from '@angular/core';
import { Person } from '../../shared/index';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  hide: boolean = false;
  
  person = {id: 1, name: "Alex", age: 47, imgUrl: "/assets/images/alex.jpg", gender:'male'};
  
  persons : Person[] = [
    {name: "Heinz", age: 17, gender: "male", married: true}, 
    {name: "Brunhilde", age: 27, gender: "female", married: false},
    {name: "Susi", age: 37, gender: "female", married: false}
  ];

  selectedPerson: Person = this.persons[0];

  isActive: boolean = false;
  
  constructor() { }

  ngOnInit() {
    
  }

  toggleDisplay(){
    this.hide = !this.hide;
  }

  handleChange(p: Person){
    console.log("value received from eventbinding");
    console.log(p);
  }
}


