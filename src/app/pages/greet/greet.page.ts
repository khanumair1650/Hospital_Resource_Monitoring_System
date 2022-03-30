import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.page.html',
  styleUrls: ['./greet.page.scss'],
})
export class GreetPage implements OnInit {

  selectedService:any;
  hasVerifiedEmail: boolean;
  navCtrl: any;
 

  
  constructor(private router : Router,  public afAuth: AngularFireAuth) { 
    this.afAuth.authState.subscribe(async user=>{
      if(user){
        setInterval(async ()=>{
          this.hasVerifiedEmail = (await this.afAuth.currentUser).emailVerified;
        },10000);
      }
    })
  }

  ngOnInit(): void {
    const user = localStorage.getItem('User')
    if(user == null){
      this.router.navigateByUrl('/login',{replaceUrl:true})
    }
    console.log(JSON.parse(user))
  }

  onServiceSelect(e){
    this.selectedService = e.detail.value;
    console.log(this.selectedService)
  }

  async sendVerificationEmail(){
    (await this.afAuth.currentUser).sendEmailVerification();
  }
  

}
