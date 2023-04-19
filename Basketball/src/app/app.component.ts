import { Component } from '@angular/core';
import { Team } from './models/Team.model';
import { ServiceResponse } from './models/ServiceResponse.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basketball';
  teams: Team[];
  serviceResponse: ServiceResponse;
  oServiceResponse: Observable<ServiceResponse>;
  serviceURL: string = "https://www.balldontlie.io/api/v1/teams/";

  constructor(public http: HttpClient) {
      this.makeTypedRequest
  }

  makeTypedRequest() : void
  {
    this.oServiceResponse = this.http.get<ServiceResponse>(this.serviceURL);
    this.oServiceResponse.subscribe(d => {this.serviceResponse = d;});
    this.teams = this.serviceResponse.data;
  } 

  
}
