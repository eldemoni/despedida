import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoBackButtonComponent } from "../go-back-button/go-back-button.component";

@Component({
  selector: 'app-snail-race',
  standalone: true,
  imports: [CommonModule, GoBackButtonComponent],
  templateUrl: './snail-race.component.html',
  styleUrl: './snail-race.component.css'
})
export class SnailRaceComponent {
  snails = [
    { name: 'Pablinho', position: 0 },
    { name: 'Alberto', position: 0 },
    { name: 'Lorman', position: 0 },
    { name: 'Peluco', position: 0 },
    { name: 'Juanma', position: 0 },
    { name: 'Xexu', position: 0 },
    { name: 'Álvaro', position: 0 },
    { name: 'Antonio', position: 0 },
    { name: 'Gabi', position: 0 },
    { name: 'Mike', position: 0 },
    { name: 'Pepe', position: 0 }
  ];
  winner: any = null;  // Variable para almacenar el ganador

  startRace() {
    const interval = setInterval(() => {
      if (this.winner) {  // Si ya hay un ganador, detén la carrera
        clearInterval(interval);  // Detener el intervalo y no mover más a los caracoles
        return;
      }

      // Mueve los caracoles
      this.snails.forEach(snail => {
        snail.position += Math.random() * 5; // Acelera el caracol de forma aleatoria
      });

      // Verifica si algún caracol ha llegado a la meta
      const winningSnail = this.snails.find(snail => snail.position >= 85);
      if (winningSnail) {
        this.winner = winningSnail;  // Asignar el ganador
        clearInterval(interval);  // Detener la carrera en cuanto haya un ganador
      }
    }, 100); // Cada 0.1 segundos
  }

  restartRace() {
    // Resetea las posiciones de todos los caracoles a 0
    this.snails.forEach(snail => {
      snail.position = 0;
    });

    // Elimina al ganador
    this.winner = null;
  }
}
