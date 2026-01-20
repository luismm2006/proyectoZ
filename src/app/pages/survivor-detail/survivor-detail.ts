import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-survivor-detail',
  imports: [],
  templateUrl: './survivor-detail.html',
  styleUrl: './survivor-detail.css',
})
export class SurvivorDetail {
  @Input() id!: string;
  


}
