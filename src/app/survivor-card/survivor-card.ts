import { Component, Input } from '@angular/core';
import { Survivor } from '../interfaces/survivor';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-survivor-card',
  imports: [RouterLink],
  templateUrl: './survivor-card.html',
  styleUrl: './survivor-card.css',
})
export class SurvivorCard {
  @Input () survivor !: Survivor;


}
