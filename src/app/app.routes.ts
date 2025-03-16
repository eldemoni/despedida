import { Routes } from '@angular/router';
import { AbcComponent } from './abc/abc.component';
import { DestinyDiceComponent } from './destiny-dice/destiny-dice.component';
import { SnailRaceComponent } from './snail-race/snail-race.component';
import { MenuComponent } from './menu/menu.component';
import { FrasesIconicasComponent } from './frases-iconicas/frases-iconicas.component';
import { RuletaComponent } from './ruleta/ruleta.component';
import { MakeleleComponent } from './makelele/makelele.component';
import { AutobusComponent } from './autobus/autobus.component';

export const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'abc', component: AbcComponent },
  { path: 'dado', component: DestinyDiceComponent },
  { path: 'caracoles', component: SnailRaceComponent },
  { path: 'frases', component: FrasesIconicasComponent },
  { path: 'ruleta', component: RuletaComponent },
  { path: 'makelele', component: MakeleleComponent },
  { path: 'autobus', component: AutobusComponent },
  { path: '', redirectTo: '/menu', pathMatch: 'full' }
];
