import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { getLocaleWeekEndRange } from '@angular/common';
import {User} from '../user'
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  userList:User[];
  restUrl='http://localhost:8080/api/contacts';
 constructor(private http:HttpClient) { }

  // public getData(abc){
  //   return this.http.post(this.restUrl, JSON.stringify(abc))
  //   .pipe(map((response:Response)=>{
  //     console.log(abc)
  //     console.log(response);
  //     return response;
  //   }));
  // }
  

  getAPIData(){
    return this.http.get('http://localhost:8080/api/contacts')
      console.log(this.userList)
  }


  

  postAPIData(user: User){
   const obj :User= {
     username:user.username,
     password:user.password,
     gender:user.gender,
     phone:user.phone
   }

  	return this.http.post('http://localhost:8080/api/contacts', obj)
  }
}
