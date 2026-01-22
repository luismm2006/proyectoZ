import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Survivor } from '../interfaces/survivor';
import { Inventario } from '../interfaces/inventario';

@Injectable({
  providedIn: 'root',
})
export class BunkerService {
  private apiUrlSurvivor = "http://localhost:3000/supervivientes";

  private http : HttpClient = inject(HttpClient);
  

  private _survivor = signal<Survivor[]>([]);
  survivors = this._survivor.asReadonly();

  private _filtroNombre = signal<String>("");
  survivorFiltroNombre = this._filtroNombre.asReadonly();

  getSupervivientes(){
    this.http.get<Survivor[]>(this.apiUrlSurvivor).subscribe({
      next: (data) => this._survivor.set(data),
      error: (error) => console.error("Error cargando supervivientes" , error)
    });
  }

  getSuperviviente(id : number) : Observable<Survivor>{
    return this.http.get<Survivor>(this.apiUrlSurvivor + "/" + id);
  }

  setFiltroNombre(valor:string){
    this._filtroNombre.set(valor);
  }
}
