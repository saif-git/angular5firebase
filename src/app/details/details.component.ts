import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {AngularFireDatabase ,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
id:any
itemArray =[]
data={
  name:  ' ',
  phone:  '',
  region: '',
  skill:  '',
  price: '',
  email: ''
       }
items:Observable<any[]>;
itemList:AngularFireList<any>;
  constructor(private activate:ActivatedRoute,public db:AngularFireDatabase,public router:Router) { 

    this.activate.params.subscribe(params=>{
   this.id=params
   console.log(params);
    });

    this.itemList=this.db.list('skill')

    this.itemList.snapshotChanges().subscribe(actions=>{
   actions.forEach(action=>{
    let w= action.payload.toJSON()
    w['$key']=action.key
    console.log(action.key)
    if(action.key===this.id['id']){ this.itemArray.push(w as ListItemClass)
    
                                     this.data.name=this.itemArray[0]['name']
                                     this.data.phone=this.itemArray[0]['phone']
                                     this.data.region=this.itemArray[0]['region']
                                     this.data.skill=this.itemArray[0]['skill']
                                     this.data.price=this.itemArray[0]['price']
                                     this.data.email=this.itemArray[0]['email']


                                      }
   
   })
    })

    console.log(this.itemArray)
  }

  ngOnInit() {
    console.log(this.id['id'])

  }

  backto(){
    this.router.navigate(['/allskills']);
  }

}

export class ListItemClass{
  $key:string;
  name:  string;
phone:  string;
region: string;
skill:  string;
price:  string;
email: string;
}