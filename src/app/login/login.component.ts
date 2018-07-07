import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { Router } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string  =''
password :string =''

  constructor(private router:Router,private Authentication:AngularFireAuth) { }

  ngOnInit() {
  }

  onLogin(){
    this.Authentication.auth.signInWithEmailAndPassword(this.email,this.password).then(user=>{
      console.log("email: "+this.email+" password :"+this.password)
     localStorage.setItem('isLoggedIn','true')
     localStorage.setItem('email',this.Authentication.auth.currentUser.email)

localStorage.getItem('uid')
console.log('uid :'+localStorage.getItem('uid'))



     /*this.Authentication.authState.subscribe(auth=>{
      if(auth){
localStorage.setItem('uid',auth.uid)

console.log('uid :'+localStorage.getItem('uid'))
      }
      })*/


     console.log("status log:"+localStorage.getItem('isLoggedIn'))
      this.router.navigate(['/addskill'])
    }).catch(error=>{
      console.log(error)
    })
  }
}
