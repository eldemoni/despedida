import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoBackButtonComponent } from "../go-back-button/go-back-button.component";

@Component({
  selector: 'app-destiny-dice',
  standalone: true,
  imports: [CommonModule, GoBackButtonComponent],
  templateUrl: './destiny-dice.component.html',
  styleUrl: './destiny-dice.component.css'
})
export class DestinyDiceComponent {

  quests = [
    {
      title: 'El dilema del “Kiusto”',
      description: 'Tienes que dar tu opinión sobre un plan y responder con “Kiusto”. ¿Lo lograrás sin arruinar la amistad?',
      difficulty: 10
    },
    {
      title: 'Dominar las Manitas de Cerdo',
      description: 'Debes atrapar el alimento más pegajoso del mundo, las manitas de cerdo, y usarlas estratégicamente para tu misión. ¿Lo lograrás?',
      difficulty: 9
    },
    {
      title: 'Navegar a Urithiru',
      description: 'Tu objetivo es llegar a la ciudad-torre de Roshar, pero te enfrentas a un laberinto de obstáculos. ¿Lo lograrás?',
      difficulty: 14
    },
    {
      title: 'Enfrentarse a la Sepia Calva',
      description: 'Te encuentras con un animal marino sin pelo, conocido por su apariencia calva. ¿Podrás enfrentarte a ella y ganar?',
      difficulty: 11
    },
    {
      title: 'Beberte la cerveza de La Hidra',
      description: 'Tu colega dejó su cerveza en la mesa y desapareció. ¿Tendrás el valor de beberla sin que se dé cuenta?',
      difficulty: 13
    },
    {
      title: 'Responder a un “a que no hay huevos”',
      description: 'Un colega te reta con un clásico “a que no hay huevos”. ¿Podrás resistirte a la presión social?',
      difficulty: 10
    },
    {
      title: 'Llamar a un taxi como un chino borracho',
      description: 'Intentas pedir un taxi como un chino, pero cada vez que hablas pareces más borracho. ¿Lograrás comunicar la dirección correcta?',
      difficulty: 14
    },
    {
      title: 'Bailar sin parecer un pato',
      description: 'Te arrastran a la pista de baile. ¿Podrás moverte con dignidad y sin parecer un pato mareado?',
      difficulty: 9
    }
  ];

  currentQuest: any = null;
  diceRoll: number = 0;
  questResult: string = '';
  questSuccess: boolean = false; // Nueva propiedad para el resultado visual

  getRandomQuest() {
    const randomIndex = Math.floor(Math.random() * this.quests.length);
    this.currentQuest = this.quests[randomIndex];
    this.questResult = '';
  }

  rollDice() {
    this.diceRoll = Math.floor(Math.random() * 20) + 1;
    this.checkQuestResult();
  }

  checkQuestResult() {
    if (this.diceRoll >= this.currentQuest.difficulty) {
      this.questResult = `Tiraste un ${this.diceRoll}`;
      this.questSuccess = true;
    } else {
      this.questResult = `Tiraste un ${this.diceRoll}`;
      this.questSuccess = false;
    }
  }
}
