import { Component, inject, signal } from '@angular/core';
import { BunkerService } from '../../service/bunker-service';
import { AsyncPipe } from '@angular/common';
import { Survivor } from '../../interfaces/survivor';
import { SurvivorCard } from '../../survivor-card/survivor-card';

@Component({
  selector: 'app-survivors',
  imports: [SurvivorCard],
  templateUrl: './survivors.html',
  styleUrl: './survivors.css',
})
export class Survivors {

  private bunkerService = inject(BunkerService);

  supervivientes = this.bunkerService.survivors;

  ngOnInit(): void{
    this.bunkerService.getSupervivientes();
  }

}
