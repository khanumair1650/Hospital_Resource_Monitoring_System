import { Component, OnInit } from '@angular/core';
//http client for  mongodb connect
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

//extra Added links for Google sign in
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import {firebase, firebaseui, FirebaseUIModule} from 'firebaseui-angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-adminlog',
  templateUrl: './adminlog.page.html',
  styleUrls: ['./adminlog.page.scss'],
})
export class AdminlogPage implements OnInit {
  email:string
  password:string
  isloading: boolean = false

  constructor(private http:HttpClient,
    private router: Router,
    private alertController: AlertController,
    public googleplus: GooglePlus,
    public afAuth: AngularFireAuth
    ) { }

  ngOnInit() {
  }
  login(){
    this.isloading=true
    let credentails ={
      email:this.email,
      password:this.password
    }
    this.http.post('http://localhost:3000/admins/loginn',credentails)
    .subscribe(res =>{
      this.isloading=false
      localStorage.setItem('Admin',JSON.stringify(res))
      this.router.navigateByUrl('admingreet',{replaceUrl:true})
    },error =>{
      this.isloading= false
      this.presentAlert('Login Failed',error.error.error)
    })
   
  }
  async presentAlert(header:string,message:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    
  }

}
