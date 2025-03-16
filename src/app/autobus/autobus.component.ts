import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoBackButtonComponent } from "../go-back-button/go-back-button.component";

@Component({
  selector: 'app-autobus',
  standalone: true,
  imports: [CommonModule, GoBackButtonComponent],
  templateUrl: './autobus.component.html',
  styleUrls: ['./autobus.component.css']
})
export class AutobusComponent implements OnInit {
  baraja: any[] = [];
  palos = ['♠', '♥', '♦', '♣'];
  valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  cartasMostradas: any[] = [];
  cartasBocaAbajo: any[] = [];
  juegoTerminado: boolean = false;

  ngOnInit() {
    this.iniciarJuego();
  }

  iniciarJuego() {
    this.crearBaraja();
    this.barajar();
    this.cartasMostradas = [];
    this.cartasBocaAbajo = this.baraja.slice(0, 5);
    this.baraja.splice(0, 5);
    this.juegoTerminado = false;
  }

  crearBaraja() {
    this.baraja = [];
    for (let palo of this.palos) {
      for (let valor of this.valores) {
        this.baraja.push({ palo, valor });
      }
    }
  }

  barajar() {
    for (let i = this.baraja.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.baraja[i], this.baraja[j]] = [this.baraja[j], this.baraja[i]];
    }
  }

  destaparCarta(index: number) {
    if (this.juegoTerminado) return; // Evitar destapar cartas si el juego ha terminado

    if (this.cartasMostradas.length === index) {
      this.cartasMostradas.push(this.cartasBocaAbajo[index]);
      this.cartasBocaAbajo[index] = null; // Marcar la carta como destapada

      if (this.cartasMostradas.length === 5) {
        this.juegoTerminado = true;
      }
    }
  }

  esRoja(carta: any) {
    return carta && (carta.palo === '♥' || carta.palo === '♦');
  }

  reiniciarJuego() {
    this.iniciarJuego();
  }
}