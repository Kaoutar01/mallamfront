import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../services/person.service';
import {Personn} from '../../personn';
import{Router}  from '@angular/router';
@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit {
private persons:Personn[];
  constructor(private _personSerice:PersonService, private _router:Router) {}

  ngOnInit() {
    this._personSerice.getAll().subscribe((persons)=>{
      console.log(persons);
      this.persons=persons;
    },(error)=>{
      console.log(error);
    })
}

}
