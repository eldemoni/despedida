import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoBackButtonComponent } from "../go-back-button/go-back-button.component";

@Component({
  selector: 'app-makelele',
  standalone: true,
  imports: [CommonModule, GoBackButtonComponent],
  templateUrl: './makelele.component.html',
  styleUrls: ['./makelele.component.css']
})
export class MakeleleComponent implements OnInit {
  baraja: any[] = [];
  palos = ['♠', '♥', '♦', '♣'];
  valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  cartaMostrada: any = null;

  ngOnInit() {
    this.crearBaraja();
    this.barajar();
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

  cogerCarta() {
    if (this.baraja.length > 0) {
      this.cartaMostrada = this.baraja.pop();
    } else {
      this.cartaMostrada = null;
      alert("No quedan cartas en la baraja.");
    }
  }

  esRoja(carta: any) {
    return carta && (carta.palo === '♥' || carta.palo === '♦');
  }
}