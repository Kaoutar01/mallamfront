import { Injectable } from '@angular/core';
import{Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//import 'rxjs/add/operator/catch';
import { throwError as _throw } from 'rxjs'; 
import{Personn}  from '../personn';
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private baseUrl:string='http://localhost:8081/rest/persons';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private personn = new Personn();
  constructor(private _http:Http) { }
  getAll(){

    return this._http.get(this.baseUrl+'/all',this.options).pipe(map((response:Response)=>response.json()));
  }

  errorHandler(error:Response){

    return Observable.throw(error||"SERVER ERROR");
 }

  setter(person:Personn){
    this.personn=person;
  }

 getter(){
   return this.personn;
 }
}
