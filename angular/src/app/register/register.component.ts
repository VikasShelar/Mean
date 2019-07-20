import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControlName, FormControl, Validators }   from '@angular/forms';
import { NgForm } from '@angular/forms';
import {User} from '../user'
import { RegisterService } from './register.service';
import { Router, ActivatedRoute } from "@angular/router";
import {  
  Observable  
 } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userList:User[]=[];

  Emp:string[]; 
  constructor( private registerServices: RegisterService) { }

  form:FormGroup;
  fm:FormsModule;

  ngOnInit() {

    this.form=new FormGroup({
      username:new FormControl(''),
      password:new FormControl(''),
      gender:new FormControl(''),
      phone:new FormControl('')
    })

           

  // this.registerServices.postAPIData(this.form).subscribe((response)=>{
  //   console.log('response from POST API is ', response);
  //   // console.log(form.value)
  // },(error)=>{
  //   console.log('error during post is ', error)
  // })
  }

  addUser(form){

    this.registerServices.postAPIData(this.form.value).subscribe((response)=>{
      console.log('response from POST API is ', response);
       console.log(form.value)
    },(error)=>{
      console.log('error during post is ', error)
    });

    this.registerServices.getAPIData().subscribe((
      data
    )=>{
      console.log('response is ', data)
  },(error) => {
      console.log('error is ', error)
  })


  this.registerServices.getAPIData().subscribe(data=>    
  {    
    this.Emp = data as string [];      
  });   

   
  }
//   submitInfo(form){
    
//     let abc =this.frm.value;
//     this.http.getData(abc).subscribe(data=>{
//       console.log(data)

//  });
//   }
}
