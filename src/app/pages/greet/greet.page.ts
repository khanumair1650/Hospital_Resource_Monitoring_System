import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hospital, UserCrudService } from '../../services/user-crud.service';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.page.html',
  styleUrls: ['./greet.page.scss'],
})
export class GreetPage implements OnInit {

  selectedService:any;
  navCtrl: any;
  Hospitals: Hospital[] ;
  showlist = true;
  hospitalFilter:String;


  constructor(private router : Router, private userCrudService: UserCrudService ,private httpClient: HttpClient)  { }

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
    this.showlist = true;
    this.userCrudService.getHospitals().subscribe((response) => {
      this.Hospitals = response;
      console.log(this.Hospitals);
    })
  }
  searchHospitals(){
    this.userCrudService.searchHospital(this.hospitalFilter)
    .subscribe((response:Hospital[]) =>{
      this.Hospitals = response;
      console.log(this.Hospitals);
    })
  }
  onCancel(event){
    this.showlist =true;

  }
  onClear(event){
    this.showlist =true;
  }

  



}
