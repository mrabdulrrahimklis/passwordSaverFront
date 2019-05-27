import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetPostService {
  url = 'http://localhost:3000/api';
  constructor(private Http: HttpClient) { }

  get() {
    return this.Http.get(this.url);
  }

  post(data) {
    console.log(data);
    return this.Http.post('http://localhost:3000/new', data).subscribe(
      data  => {
        console.log("POST Request is successful ", data);
      },
      error  => {
        console.log("Error", error);
      }
    );
  }
}
