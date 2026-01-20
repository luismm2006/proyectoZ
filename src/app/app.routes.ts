import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Survivors } from './pages/survivors/survivors';
import { Inventory } from './pages/inventory/inventory';
import { SurvivorDetail } from './pages/survivor-detail/survivor-detail';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: Dashboard},
    {path: 'survivors', component: Survivors},
    {path: 'inventory', component: Inventory},
    
    // Ruta con parámetro
    {path: 'survivors/:id', component: SurvivorDetail},
    {path: '**', component: NotFound},

];
