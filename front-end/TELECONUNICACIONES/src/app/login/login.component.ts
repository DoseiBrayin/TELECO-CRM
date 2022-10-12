import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators} from '@angular/forms'
import {ApiService} from '../../app/Services/api/api.service'
import {clientI} from '../../app/model/client.interface'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })

  constructor(private api:ApiService) { }

  ngOnInit(): void {

  }

  onLogin(form:clientI){
    this.api.loginBy(form).subscribe(data =>{
      console.log(data)
    })
  }

}
