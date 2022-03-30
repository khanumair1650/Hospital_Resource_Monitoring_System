import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name: string
  email:string
  contactno:number
  password:string
  isloading: boolean = false

  constructor(private http: HttpClient,private router:Router,private alertController:AlertController) { }

  ngOnInit() {
  }

  register(){
    this.isloading = true
    let user ={
      
      name: this.name,
      email: this.email,
      contactno: this.contactno,
      password: this.password

    }
    this.http.post('http://localhost:3000/users/register',user)
    .subscribe(res =>{
      this.isloading = false
      localStorage.setItem('User',JSON.stringify(res))
      this.router.navigateByUrl('greet',{replaceUrl:true})
    }, error => {
      this.isloading = false
      this.presentAlert('Registration Failed',error.error.error)
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
