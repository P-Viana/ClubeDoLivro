import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
// COMPONENTE Section-who-we-are
@Component({
  imports: [CommonModule, RouterModule],
  selector: 'section-who-we-are',
  templateUrl: './section-who-we-are.html',
  styleUrl: './section-who-we-are.css'
})
export class SectionWhoWeAre {
    readonly nomeLivro = input<string>('A Volta ao Mundo em 80 dias');
    readonly nomeAutor = input<string>('Júlio Verne')
    readonly texto = input<string>('Volta ao Mundo em 80 Dias é uma aventura divertida, que ajuda a aprender sobre o mundo, a refletir sobre o tempo e ainda conhecer um dos maiores autores da literatura.')
}