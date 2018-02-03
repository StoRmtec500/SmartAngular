import { Observable } from "rxjs/Rx";
import { Person } from "../../shared";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reactive-validation",
  templateUrl: "./reactive-validation.component.html",
  styleUrls: ["./reactive-validation.component.css"]
})
export class ReativeValidationComponent implements OnInit {
  personForm: FormGroup;
  person: Person = {
    name: "Heinz",
    gender: "male",
    age: 20,
    mail: "derschoeneheinz@xyz.at"
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.personForm = this.fb.group({
      name: [
        this.person.name,
        [
          Validators.required,
          Validators.minLength(4),
          this.validateNotHugo,
          this.validateNamesExist
        ]
      ],
      age: [this.person.age, [Validators.min(18), Validators.max(99)]],
      gender: [this.person.gender]
    });
  }

  savePerson(formValues) {
    console.log("saving person with values: ");
    console.log(formValues);
  }

  hasErrors() {
    let errs =  this.personForm.controls.name.errors ;

    if(errs){
      console.log("Errors in Name field: ", this.personForm.controls.name.errors)
    }

    return true;    
  }

  validateNotHugo(control: FormControl): { [s: string]: boolean } {
    if (control.value === "Hugo") {
      return { hugoNotAllowed: true };
    }
    return null;
  }

  validateNamesExist(control: FormControl): Promise<any> | Observable<any> {
    //Mocking Http Call to service to check weather user exists
    const result = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "Alexander") {
          resolve({ UserExists: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return result;
  }

  validateForm(form) {
    form.updateValueAndValidity();
    form.controls["pName"].updateValueAndValidity();
  }
}
