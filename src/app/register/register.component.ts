import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

fname:string=''
lname:string=''
email:string=''
passwd:string=''
rpasswd:string=''

  constructor(private router:Router,private Auth:AngularFireAuth) {
    
   }

  ngOnInit() {
  }

  onRegister(){
    this.Auth.auth.createUserWithEmailAndPassword(this.email,this.passwd).then(user=>{
      console.log("email: "+this.email+" password :"+this.passwd)
      this.router.navigate(['/home'])
    }).catch(error=>{
      console.log(error)
    })
  }

}
