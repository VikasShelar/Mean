import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { AccountService } from '../account.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  restUrl='http://localhost:8080/api/contacts/';

  public getData(abc){

    return this.http.get(this.restUrl)
     .pipe(map((response:Response)=>{
       console.log("Login Successfully");
       return response;
      
     
     }));
  }
  
  constructor(private http:HttpClient) { 
  //   let objParam={
  //   // username:'mapinfotech016@gmail.com',
  //   // password:'Mapinfotech@123'
  //   username:'',
  //   password:''
  // }
 
}
  
 
}
