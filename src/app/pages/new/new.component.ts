import {Component, ElementRef, ViewChild} from '@angular/core';
import { GetPostService } from "../../communication/get-post.service";
import { PasswordModel } from "../../models/password.model";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  user: any;
  name: any;
  link: any;
  password: any;
  date: any;
  constructor(private getPost: GetPostService, private elementRef: ElementRef) {}

  onKeyUpUser(user) {
    this.user = user;
  }

  onKeyUpName(name) {
    this.name = name;
  }

  onKeyUpLink(link) {
    this.link = link;
  }

  onKeyUpPass(pass) {
    this.password = pass;
  }

  onKeyUpDate(date) {
    this.date = date;
  }

  post() {
    let data = {
      user: this.user,
      name: this.name,
      link: this.link,
      password: this.password,
      date: this.date
    };

    this.getPost.post(data)
  }
}
