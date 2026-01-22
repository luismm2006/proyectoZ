import { Component, computed, inject, Input, Output, signal } from '@angular/core';
import { BunkerService } from '../../service/bunker-service';
import { AsyncPipe } from '@angular/common';
import { Survivor } from '../../interfaces/survivor';
import { SurvivorCard } from '../survivor-card/survivor-card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-survivors',
  imports: [SurvivorCard, FormsModule],
  templateUrl: './survivors.html',
  styleUrl: './survivors.css',
})
export class Survivors {
  private bunkerService = inject(BunkerService);

  supervivientes = this.bunkerService.survivors;

  ngOnInit(): void {
    this.bunkerService.getSupervivientes();
  }

  filtroNombre = this.bunkerService.survivorFiltroNombre; 
  
  actualizarFiltroNombre(valor: string) { 
    this.bunkerService.setFiltroNombre(valor); 
  }
  filtNombre = computed(() => this.supervivientes().filter(s => s.nombre.toLowerCase().includes(this.filtroNombre().toLowerCase()) ) );
}

