import { Component } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.css'
})
export class PlayerListComponent {
  player: Player = {
    id: 1,
    name: 'Pablinho'
  };
}
