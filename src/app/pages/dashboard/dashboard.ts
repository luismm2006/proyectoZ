import { Component, computed, inject } from '@angular/core';
import { BunkerService } from '../../service/bunker-service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  private bunkerService = inject(BunkerService);

  supervivientes = this.bunkerService.survivors;

  ngOnInit() : void {
    this.bunkerService.getSupervivientes();
  }

  countSurvivor = computed(()=>this.supervivientes().length);
}
