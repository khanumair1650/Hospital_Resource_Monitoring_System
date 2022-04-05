import { Component, OnInit } from '@angular/core';
import { UserCrudService } from '../../services/user-crud.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  Hospitals: any = [];

  constructor( private userCrudService: UserCrudService ) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.userCrudService.getHospitals().subscribe((response) => {
      this.Hospitals = response;
    })
  }

  removeHospital(hospital, i) {
    if (window.confirm('Are you sure')) {
      this.userCrudService.deleteHospital(hospital.pin)
      .subscribe(() => {
          this.Hospitals.splice(i, 1);
          console.log('Hospital deleted!')
        }
      )
    }
  }

}
