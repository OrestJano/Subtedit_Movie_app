import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, EmailValidator, Validators} from '@angular/forms'
import { from } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  rForm: FormGroup;
  post:any;
  name: String='';
  email:EmailValidator;
  message: String='';


  constructor(private fb: FormBuilder) { 

    this.rForm = fb.group({
      'name' : [null, Validators.required],
      'email' : [null, Validators.required],
      'message': [null, Validators.compose([Validators.required, Validators.minLength(30),Validators.maxLength(500)])],
      'validate': ''
    });

  }

  ngOnInit(){}

}
