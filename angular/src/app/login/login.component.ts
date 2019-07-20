import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import {LoginService} from './login.service';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    // insertForm : FormGroup;
    username :  FormControl;
    password :  FormControl;
    returnUrl : string;
    ErrorMessage: string; 
    invalidLogin: boolean;


    insertForm = this.fb.group({
        username: new FormControl(''),
        password: new FormControl(''),
      });

    constructor(private acct : AccountService,
                private router : Router,
                private route: ActivatedRoute,
                private fb: FormBuilder,
                private http:LoginService) { 
                   
                    
                }
                

                ngOnInit() {

                    // // Initialize Form Controls
                    // this.Username = new FormControl('', [Validators.required]);
                    // this.Password = new FormControl('', [Validators.required]);
            
                    // // get return url from route parameters or default to '/'
                    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
            
                    //  // Initialize FormGroup using FormBuilder
                    
                    // console.log(this.insertForm)
            
              }
            //   let abc = 
              onSubmit() {
let abc =this.insertForm.value;
// let username = this.Username.value;
// let password = this.Password.value;
// let abc = {username : username, password : password}
// console.log(username);
                // TODO: Use EventEmitter with form value
                // console.warn(this.insertForm.value);
                this.http.getData(abc).subscribe(data=>{
                    console.log(data)
       
               });
              }
            

    //  onSubmit() 
    // {

    //     // let username = this.insertForm.value;

    //     // this.acct.login(username.Username, username.Password).subscribe(result => {

    //     //     let token = (<any>result).token;
    //     //     console.log(token);
    //     //     console.log(result.userRole);
    //     //     console.log("User Logged In Successfully");
    //     //     this.invalidLogin = false;
    //     //     console.log(this.returnUrl);
    //     //     this.router.navigateByUrl(this.returnUrl);
        
    //     // }
    //     let objParam={
    //         // username:'mapinfotech016@gmail.com',
    //         // password:'Mapinfotech@123'
    //         username: Username,
    //         password:''
           
    //       }
    //       console.log(objParam)

         
        
    
        
    //     error => 
    //     {
    //         this.invalidLogin = true;

    //         this.ErrorMessage = error.error.loginError;

    //         console.log(this.ErrorMessage);
    //     }

    // }

   


}
