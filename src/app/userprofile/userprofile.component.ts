import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase ,AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';import {AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { Observable } from 'rxjs'; 


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  itemList:AngularFireList<any>;
id:any
  email:string ;
  itemArray =[]
myid:any
  data={
    
    name:  ' ',
    phone:  '',
    region: '',
    skill:  '',
    price: '',
    email:'',
    myid:'',
    image:''
         }
    userkey:any;
ref:AngularFireStorageReference
task:AngularFireUploadTask

uploadProgress: Observable<number>;
downloadURL: Observable<string>;
imageURL:string;



  constructor(public db:AngularFireDatabase,public router:Router,private activate:ActivatedRoute,public afStorage:AngularFireStorage) {
    this.email=localStorage.getItem('email');
    this.myid=localStorage.getItem('uid');
    this.itemList=this.db.list('skill')

    this.activate.params.subscribe(params=>{
      this.id=params
      console.log(params);
       });
   
       this.itemList=this.db.list('skill')
   
       this.itemList.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
       let w= action.payload.toJSON()
       w['$key']=action.key
      // console.log(action.key)
    this.myid=localStorage.getItem('uid')
  //  console.log(this.itemArray)
  console.log("here:"+action.payload.child('uid').val())
    if(action.payload.child('myid').val()===this.myid){ 
      this.userkey=action.key
      this.itemArray.push(w as ListItemClass)
    
      this.data.name=this.itemArray[0]['name']
      this.data.phone=this.itemArray[0]['phone']
      this.data.region=this.itemArray[0]['region']
      this.data.skill=this.itemArray[0]['skill']
      this.data.price=this.itemArray[0]['price']
      this.data.email=this.itemArray[0]['email']
       this.data.myid=this.itemArray[0]['myid']
       this.data.image=this.itemArray[0]['image']

       console.log(this.data)
   console.log("userkey :"+this.userkey)

       }
      

   })
  })

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



  ngOnInit() {
    console.log(this.email)
    console.log(this.myid)
    console.log(this.data)

  }
  upload(event){
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    console.log('Image uploaded!');
    this.downloadURL=this.ref.getDownloadURL();
    console.log("the download :"+this.downloadURL);

    this.downloadURL.subscribe(url => {
      if(url){
        this.imageURL=url;
      }    
      
      
      console.log("image URL :"+this.imageURL)
      this.itemList.set(this.userkey, {
        name:  this.data.name,
        phone:  this.data.phone,
        region:  this.data.region,
        skill: this.data.skill,
        price: this.data.price,
        email :this.email,
        myid:this.myid,
        image:this.imageURL
       })
    
    })

 /* this.task.snapshotChanges().pipe(
    finalize(() => {
      this.downloadURL = this.ref.getDownloadURL()
      this.downloadURL.subscribe(url => (this.image = url));
    })
  )
  .subscribe();*/

}
  OnEdit(){

    console.log("On Edditing :")
  

  
     this.itemList.set(this.userkey, {
      name:  this.data.name,
      phone:  this.data.phone,
      region:  this.data.region,
      skill: this.data.skill,
      price: this.data.price,
      email :this.email,
      myid:this.myid
     })
  
   // this.router.navigate(['/myskills'])
  this.itemArray=[]
  
  console.log("name :"+this.data.name+" "+"phone  :"+this.data.phone+" "+"region  :"+this.data.region+" "+"skill  :"+this.data.skill+" "+"price  :"+this.data.price+" email :"+this.email)
   
  }



}
export class ListItemClass{
  name:  string;
phone:  string;
region: string;
skill:  string;
price:  string;
email:string;
}