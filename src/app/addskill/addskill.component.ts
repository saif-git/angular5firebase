import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase ,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';


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

items:Observable<any[]>;
itemList:AngularFireList<any>;

  constructor(public db:AngularFireDatabase,public router:Router) { 
    this.itemList=this.db.list('skill')
  }

  ngOnInit() {
console.log(this.data.name)

}

insertskill(){
  this.itemList.push({
    name:  this.data.name,
    phone:  this.data.phone,
    region: this.data.price,
    skill:  this.data.region,
    price: this.data.skill
  })

  this.router.navigate(['/myskills.html'])
 
}



}