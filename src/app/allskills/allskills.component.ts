import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase ,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';


import { Router } from '@angular/router';

@Component({
  selector: 'app-allskills',
  templateUrl: './allskills.component.html',
  styleUrls: ['./allskills.component.css']
})
export class AllskillsComponent implements OnInit {

  itemList:AngularFireList<any>;

  itemArray =[]

  data={
    name:  ' ',
    phone:  '',
    region: '',
    skill:  '',
    price: ''
         }

  constructor(public db:AngularFireDatabase,public router:Router) {

   }

  ngOnInit() {
  }

  OnEdit($key){

    console.log("On Edditing :")
  
    this.data.name
    this.data.phone
    this.data.region
    this.data.skill
    this.data.price
  
     this.itemList.set($key, {
      name:  this.data.name,
      phone:  this.data.phone,
      skill:  this.data.region,
      price: this.data.skill,
      region: this.data.price
     })
  
   // this.router.navigate(['/myskills'])
  this.itemArray=[]
  
  console.log("name :"+this.data.name+" "+"phone  :"+this.data.phone+" "+"region  :"+this.data.region+" "+"skill  :"+this.data.skill+" "+"price  :"+this.data.price+" ")
   
  }
  

  editForm($key){
    console.log("editing form also !!!")
  
    for(let value of this.itemArray ){
  
      if(value['$key']==$key){
   
        this.data.name=value['name']
        console.log(value['name'])
        this.data.phone=value['phone']
        this.data.region=value['region']
        this.data.skill=value['skill']
        this.data.price=value['price']
  
        console.log("name :"+this.data.name+" "+"phone  :"+this.data.phone+" "+"region  :"+this.data.region+" "+"skill  :"+this.data.skill+" "+"price  :"+this.data.price+" ")
  
      }
       
    }
  }

  OnDelete($key){
    console.log("Deleting : data")
    
    this.itemList.remove($key)

    this.itemArray=[]
    }



}
