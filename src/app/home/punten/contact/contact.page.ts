import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

import {ContactService} from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  userHasEmail: Boolean = false;
  userHasPhone: Boolean = false;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  onSubmitEmail(emailForm: NgForm) {
    const email = emailForm.value.email;
    this.contactService.submitEmail(email)
        .subscribe(
            data => {
              this.userHasEmail = true;
                console.log(data);
            },
            error => {
              console.log(error);
            }
        );
  }

  onSubmitMobile(mobileForm: NgForm) {
    const phone = mobileForm.value.phone;
    this.contactService.submitPhone(phone)
        .subscribe(
            data => {
                this.userHasPhone = true;
                console.log(data);
            },
            error => {
                console.log(error);
            }
        );
  }

}
