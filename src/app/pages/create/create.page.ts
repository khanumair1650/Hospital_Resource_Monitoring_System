import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserCrudService } from '../../services/user-crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
   
  hospitalForm: FormGroup;
  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private userCrudService: UserCrudService    
  ) { 
    this.hospitalForm = this.formBuilder.group({
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

  ngOnInit() {
  }

  onSubmit() {
    if (!this.hospitalForm.valid) {
      return false;
    } else {
      this.userCrudService.addHospital(this.hospitalForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.hospitalForm.reset();
            this.router.navigate(['/list']);
          })
        });
    }
  }

}

