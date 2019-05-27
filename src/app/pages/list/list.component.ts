import { Component } from '@angular/core';
import { GetPostService } from "../../communication/get-post.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  data: any;

  constructor(private getPost: GetPostService) {}

  get() {
    this.getPost.get().subscribe(resp => {
      this.data = resp;
    })
  }
}
