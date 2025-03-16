import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoBackButtonComponent } from "../go-back-button/go-back-button.component";

@Component({
  selector: 'app-abc',
  standalone: true,
  imports: [CommonModule, GoBackButtonComponent],
  templateUrl: './abc.component.html',
  styleUrl: './abc.component.css'
})
export class AbcComponent {
  alphabet = [
    { char: 'A', question: 'Nombre real de Seymour Skinner', answer: 'Armin Tamzarian' },
    { char: 'B', question: 'País en el que basas tu mítico nombre de futbolista', answer: 'Brasil' },
    { char: 'C', question: 'Sinónimo de “Gabi”', answer: 'Chill' },
    { char: 'D', question: 'Continúa la frase “Como un…”', answer: 'Demonio' },
    { char: 'E', question: 'Álter ego de Amador Rivas', answer: 'Espartaco' },
    { char: 'F', question: 'Grupo musical español liderado por Diego Cantero', answer: 'Funambulista' },
    { char: 'G', question: 'Adjetivo usado para diferenciar un Gabi del otro del curso', answer: 'Gordo' },
    { char: 'H', question: 'Criatura mitológica griega con múltiples cabezas que se regeneraban al ser cortadas', answer: 'Hidra' },
    { char: 'I', question: 'Cuando un texto es muy extenso y denso se dice que es …', answer: 'Infumable' },
    { char: 'J', question: 'Nombre del dependiente de cómics de Los Simpson', answer: 'Jeff Albertson' },
    { char: 'K', question: 'Expresión utilizada para indicar contrariedad respecto a cualquier idea o plan', answer: 'Kiusto' },
    { char: 'L', question: 'Nombre de la guiri borracha que te hacía tanta gracia en la universidad', answer: 'Leanne' },
    { char: 'M', question: 'Alimento más pegajoso del mundo', answer: 'Miel / Manitas de cerdo' },
    { char: 'N', question: 'Apellido de la mujer con cara de hipopótamo de nuestro curso', answer: 'Nieto' },
    { char: 'Ñ', question: 'Título atribuido a Anselmo', answer: 'Ñordo Humano' },
    { char: 'O', question: 'Enfermedad diagnosticada a las personas que tienen los testículos extremadamente grandes', answer: 'Otiplesto' },
    { char: 'P', question: 'Persona más rata del grupo', answer: 'Pablinho' },
    { char: 'Q', question: 'Lo más romántico que se le puede decir a una mujer', answer: 'Qwe quiero' },
    { char: 'R', question: 'Persona del grupo que tiene la polla más ancha que larga', answer: 'Ramón' },
    { char: 'S', question: 'Animal marino con menos pelo que un azulejo', answer: 'Sepia' },
    { char: 'T', question: 'Primer apellido de los mellizos del curso', answer: 'Tur' },
    { char: 'U', question: 'Ciudad-torre de Roshar', answer: 'Urithiru' },
    { char: 'V', question: 'Contiene la V, exluchador de la UFC', answer: 'Khabib Nurmagomedov' },
    { char: 'W', question: 'Lo que pilló la madre de Pablo al francés', answer: 'Weed' },
    { char: 'X', question: 'China del curso', answer: 'Xue-fon' },
    { char: 'Y', question: 'Expresión anglosajona utilizada cuando se rehúsa de las consecuencias de una acción', answer: 'Yolo' },
    { char: 'Z', question: 'Abeja macho cuya misión es fecundar a la reina', answer: 'Zángano' },
  ];

  isDialogOpen: boolean = false;
  currentQuestion: string = '';
  currentAnswer: string = '';
  currentIndex: number | null = null;

  openDialog(index: number) {
    this.currentIndex = index;
    this.currentQuestion = this.alphabet[index].question;
    this.currentAnswer = this.alphabet[index].answer;
    this.isDialogOpen = true; // Abrir el modal
  }

  closeDialog() {
    if (this.currentIndex !== null) {
      this.alphabet[this.currentIndex].char = this.currentAnswer; // Reemplazar letra por la respuesta
      this.isDialogOpen = false; // Cerrar el modal
    }
  }
}
