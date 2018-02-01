
import { Person } from '../persons/persons.component';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonEditComponent implements OnInit {
  @Input() person: Person;
  @Input() edit: boolean;
  @Output() savePerson : EventEmitter<Person> = new EventEmitter();

  constructor() { 
    
  }

  ngOnInit() {
    console.log(this.person)
  }

  doSave(){
    this.savePerson.emit(this.person)
  }

  doDelete(){
    console.log(`deleting ${this.person.name}`);
  }

}
