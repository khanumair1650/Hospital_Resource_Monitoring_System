import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserCrudService } from '../../services/user-crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  updatehospitalFg: FormGroup;
  pin: any;

  constructor(
    private userCrudService: UserCrudService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.pin = this.activatedRoute.snapshot.paramMap.get('pin');
  }

  ngOnInit() {
    this.fetchHospital(this.pin);
    this.updatehospitalFg = this.formBuilder.group({
      description: [''],
      name: [''],
      address: [''],
      beds: [''],
      oxygen: [''],
      bloods: [''],
      vaccine: [''],
      contactno: [''],
      link: [''],
      pin: ['']
    })
  }

  fetchHospital(pin) {
    this.userCrudService.getHospital(pin).subscribe((data) => {
      this.updatehospitalFg.setValue({
        description:['description'],
        name: data['name'],
        address: data['address'],
        beds: data['beds'],
        oxygen: data['oxygen'],
        bloods: data['bloods'],
        vaccine: data['vaccine'],
        contactno: data['contactno'],
        link: data['link'],
        pin: data['pin'],
      });
    });
  }

  onSubmit() {
    if (!this.updatehospitalFg.valid) {
      return false;
    } else {
      this.userCrudService.updateHospital(this.pin, this.updatehospitalFg.value)
        .subscribe(() => {
          this.updatehospitalFg.reset();
          this.router.navigate(['/list']);
        })
    }
  }

}
