import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  isDisplay = false;
  constructor(private fb: FormBuilder){}


  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: ['',Validators.required],
      designation:  [''],
      email:  ['', Validators.email],
      mobile: ['', [Validators.required, Validators.pattern(new RegExp('^[6-9][0-9]{9}$'))]],
      address: this.fb.group({
        doorNo: [''],
        roadName: [''],
        locality: [''],
        pinCode: ['']
      })
    })
  }

  _keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        event.preventDefault();

    }
}

  toggleDisplay(){
    this.isDisplay = !this.isDisplay;
  }
  onSubmit(): void{
    console.log(this.employeeForm.value);
  }

}
