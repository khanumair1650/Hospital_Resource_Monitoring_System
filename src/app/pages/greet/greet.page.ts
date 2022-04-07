import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCrudService } from '../../services/user-crud.service';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.page.html',
  styleUrls: ['./greet.page.scss'],
})
export class GreetPage implements OnInit {

  selectedService:any;
  hasVerifiedEmail: boolean;
  navCtrl: any;
  Hospitals: any = [];
  Filter: string;
 

  
  constructor(private router : Router, private userCrudService: UserCrudService ,private httpClient: HttpClient)  {
    this.userCrudService.searchHospital().subscribe(res => {
      console.log(res)
      this.Hospitals = res;
    }); 
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

  ionViewDidEnter() {
    this.userCrudService.getHospitals().subscribe((response) => {
      this.Hospitals = response;
    })
  }
  



}
