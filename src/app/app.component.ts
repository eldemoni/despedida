import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AbcComponent } from "./abc/abc.component";
import { PlayerListComponent } from "./player-list/player-list.component";
import { MenuComponent } from "./menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AbcComponent, PlayerListComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aqui yació Pablinho la Hidra';
}
