
import { Component, OnInit } from '@angular/core';
import { Person } from '../nested/persons/persons.component';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  hide: boolean = false;
  
  person = {id: 1, name: "Alex", age: 47, imgUrl: "http://www.integrations.at/alex.jpg", gender:'male'};
  
  persons : Person[] = [
    {name: "Heinz", gender: "male", married: true}, 
    {name: "Brunhilde", gender: "female", married: false},
    {name: "Susi", gender: "female", married: false}
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


