import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase ,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']

})
export class AddskillComponent implements OnInit {

  data={
name:  ' ',
phone:  '',
region: '',
skill:  '',
price: ''
     }

     email :string=''
uid:any

items:Observable<any[]>;
itemList:AngularFireList<any>;

  constructor(public db:AngularFireDatabase,public router:Router,private Authentication:AngularFireAuth  ) { 
    this.itemList=this.db.list('skill')
    let user=localStorage.getItem('email')
    console.log(user)
    this.email=user
    console.log("------------")


   this.Authentication.authState.subscribe(auth=>{
   if(auth){
     this.uid=auth.uid
     console.log('uid :'+this.uid)
   }
   })
  
  
  }

  ngOnInit() {
    

console.log(this.data.name)

}

insertskill(){
  this.itemList.push({
    name:  this.data.name,
    phone:  this.data.phone,
    skill:  this.data.region,
    price: this.data.skill,
    region: this.data.price,
    email :this.email,
    uid: this.uid
    
  })

  this.router.navigate(['/myskills'])
 
}



}