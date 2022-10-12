import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators} from '@angular/forms';
import { PetitionI } from '../model/petition.interface';
import {ApiService} from '../../app/Services/api/api.service';
import { ResponseI } from '../model/response.interface';


@Component({
  selector: 'app-request-usuario',
  templateUrl: './request-usuario.component.html',
  styleUrls: ['./request-usuario.component.scss']
})
export class RequestUsuarioComponent implements OnInit {

  petitionForm = new FormGroup({
    client_id:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    des:new FormControl('',Validators.required)
  })

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  onPetition(form:PetitionI){
    this.api.petitionBy(form).subscribe(data=>{
      let DataPetition = data;
      console.log(DataPetition)
    })
  }
}
