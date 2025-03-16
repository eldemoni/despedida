import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoBackButtonComponent } from "../go-back-button/go-back-button.component";

@Component({
  selector: 'app-ruleta',
  standalone: true,
  imports: [CommonModule, GoBackButtonComponent],
  templateUrl: './ruleta.component.html',
  styleUrl: './ruleta.component.css'
})
export class RuletaComponent {
  options = ['Chupito', 'Da una vuelta a la mesa', 'Foto grupal', 'Cantar una canción', 'Bailar', 'Imitar a alguien', 'Contar un chiste', 'Hacer una historia corta'];
  rotation = 0;
  result: string | null = null;

  spinRuleta() {
    const randomDeg = Math.floor(Math.random() * 3600) + 3600;
    this.rotation = randomDeg;

    // Calcular el índice de la opción ganadora basado en el ángulo
    const selectedOptionIndex = Math.floor((randomDeg % 3600) / (360 / this.options.length));
    this.result = this.options[selectedOptionIndex];
  }
}
