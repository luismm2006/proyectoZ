import { Component, inject, signal } from '@angular/core';
import { BunkerService } from '../../service/bunker-service';
import { AsyncPipe } from '@angular/common';
import { Survivor } from '../../interfaces/survivor';

@Component({
  selector: 'app-survivors',
  imports: [],
  templateUrl: './survivors.html',
  styleUrl: './survivors.css',
})
export class Survivors {

  private bunkerService = inject(BunkerService);

  supervivientes = signal<Survivor[]>([]);

  ngOnInit(): void{
    this.bunkerService.getSupervivientes().subscribe({
      next: (data) => this.supervivientes.set(data),
      error: (err) => console.error("Error cargando supervivientes")
    });
  }

}
