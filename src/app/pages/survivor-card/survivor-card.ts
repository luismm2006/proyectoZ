import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";
import { Survivor } from '../../interfaces/survivor';

@Component({
  selector: 'app-survivor-card',
  imports: [RouterLink],
  templateUrl: './survivor-card.html',
  styleUrl: './survivor-card.css',
})
export class SurvivorCard {
  @Input () survivor !: Survivor;


}
