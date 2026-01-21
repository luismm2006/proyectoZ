import { Component, inject, Input } from '@angular/core';
import { BunkerService } from '../../service/bunker-service';
import { Survivor } from '../../interfaces/survivor';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-survivor-detail',
  imports: [RouterLink],
  templateUrl: './survivor-detail.html',
  styleUrl: './survivor-detail.css',
})
export class SurvivorDetail {
  @Input() id!: string;
  
  private bunkerService = inject(BunkerService);

  survivor !: Survivor;

  ngOnInit(){
    this.bunkerService.getSuperviviente(Number(this.id)).subscribe({
      next: (data) => this.survivor = data,
    });
  }
}
