import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators} from '@angular/forms'
import {ApiService} from '../../app/Services/api/api.service'
import {clientI} from '../../app/model/client.interface'
import {Router} from '@angular/router'
import { ResponseI } from '../model/response.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {

  }

  onLogin(form:clientI){
    this.api.loginBy(form).subscribe(data =>{
      let Data:ResponseI = data
      if(data.Status == "Ok"){
        this.router.navigate(['index-admin'])
      }else{
        alert('Contraseña incorrecta')
      }
    })
  }

}
