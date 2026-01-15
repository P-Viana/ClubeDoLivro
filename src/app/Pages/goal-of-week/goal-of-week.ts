import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
// COMPONENTE Goal of week
@Component({
  imports: [CommonModule, RouterModule],
  selector: 'goal-of-week',
  templateUrl: './goal-of-week.html',
  styleUrl: './goal-of-week.css'
})
export class GoalOfWeek {
    readonly nomeLivro = input<string>('A Volta ao Mundo em 80 dias');
    readonly nomeAutor = input<string>('Júlio Verne')
    readonly texto = input<string>('Volta ao Mundo em 80 Dias é uma aventura divertida, que ajuda a aprender sobre o mundo, a refletir sobre o tempo e ainda conhecer um dos maiores autores da literatura.')
}