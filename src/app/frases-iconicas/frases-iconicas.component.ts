import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoBackButtonComponent } from "../go-back-button/go-back-button.component";

@Component({
  selector: 'app-frases-iconicas',
  standalone: true,
  imports: [CommonModule, GoBackButtonComponent],
  templateUrl: './frases-iconicas.component.html',
  styleUrls: ['./frases-iconicas.component.css']
})
export class FrasesIconicasComponent {
  trolls = ['Javi', 'Pepe', 'Xexu', 'Alberto', "Reme", "Antonio", "Ramón", "Lorman", "Gabi"];
  frases = [
    { frase: "Un litro de vodka entre tres va bien", persona: "Javi" },
    { frase: "Qwe quiero", persona: "Pepe" },
    { frase: "Yo de spiderman no", persona: "Xexu" },
    { frase: "Tengo que ordenar las naranjas del frigorífico", persona: "Alberto" },
    { frase: "Marcos, 0.5", persona: "Reme?"},
    { frase: "Cuando acabéis el Beerpong, vamos al salon y bailamos música de discoteca", persona: "Antonio" },
    { frase: "Las personas son como los coches", persona: "Ramón"},
    { frase: "La polla fina o ancha?", persona: "Lorman"},
    { frase: "Peluco tu sel el mas goldo y el mas cabeson del glupo", persona: "Gabi"},
  ];

  preguntaActual: any = null;
  respuestaCorrecta: boolean | null = null;
  jugadorSeleccionado: string | null = null; // Para almacenar el jugador seleccionado

  obtenerPregunta() {
    const randomIndex = Math.floor(Math.random() * this.frases.length);
    this.preguntaActual = this.frases[randomIndex];
    this.respuestaCorrecta = null;
    this.jugadorSeleccionado = null; // Resetear jugador seleccionado
  }

  verificarRespuesta(personaSeleccionada: string) {
    this.jugadorSeleccionado = personaSeleccionada;
    this.respuestaCorrecta = personaSeleccionada === this.preguntaActual.persona;
  }
}