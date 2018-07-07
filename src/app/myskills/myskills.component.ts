import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase ,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';


import { Router } from '@angular/router';


@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.css']
})
export class MyskillsComponent implements OnInit {

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
    this.itemList=this.db.list('skill')

    this.itemList.snapshotChanges().subscribe(actions=>{
   actions.forEach(action=>{
    let w= action.payload.toJSON()
    w['$key']=action.key
    this.itemArray.push(w as ListItemClass)
   })
    })
    console.log(this.itemArray)

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

console.log("name :"+this.data.name+" "+"phone  :"+this.data.phone+" "+"region  :"+this.data.region+" "+"skill  :"+this.data.skill+" "+"price  :"+this.data.price)
 
}

OnDelete($key){
  console.log("Deleting : data")
  
  this.itemList.remove($key)

  this.itemArray=[]
  }

Submitfnct($key,name,phone,region,skill,price){

}

openModal(){
  console.log("open modal")
  var modal=document.getElementById('myModal');
  modal.style.display = "block";
}

closeModal(){

  var modal=document.getElementById('myModal')
  modal.style.display="none";
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

}


export class ListItemClass{
  $key:string;
  name:  string;
phone:  string;
region: string;
skill:  string;
price:  string;
}
