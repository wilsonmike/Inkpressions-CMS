import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable({
  providedIn: 'root',
})
export class Inkpressions {
  baseUrl = 'http://localhost:3000/';

  constructor(private router: Router, private http: HttpClient) {}

  getDirtLabel = (): any => {
    return this.http.get(`${this.baseUrl}`);
  }
  getDirtLabelNoLineItems = (): any => {
    return this.http.get(`${this.baseUrl}distinct`);
  }
}
