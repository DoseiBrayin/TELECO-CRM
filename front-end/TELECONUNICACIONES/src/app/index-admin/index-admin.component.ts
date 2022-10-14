import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../app/Services/api/api.service';
import { PetitionGetI } from '../model/petitionget.interface';

@Component({
  selector: 'app-index-admin',
  templateUrl: './index-admin.component.html',
  styleUrls: ['./index-admin.component.scss']
})
export class IndexAdminComponent implements OnInit {
  petitions:PetitionGetI [] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  getPetition(searchTerme : string){
      this.api.petitionGet(searchTerme).subscribe(data =>{
        this.petitions = data !== undefined ? data : [] 
      })
    }
}

 