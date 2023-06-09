import { Component, Input } from '@angular/core';
import { ServiceResponse } from '../models/ServiceResponse.model';
import { Team } from '../models/Team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  @Input() team: Team;

  ngInit() {

  }
  
}
