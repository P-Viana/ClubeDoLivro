import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
// COMPONENTE Topper
@Component({
  imports: [CommonModule, RouterModule],
  selector: 'topper',
  templateUrl: './topper.html',
  styleUrl: './topper.css'
})
export class Topper {
    readonly nomePerfil = input<string>('Dayman Novaes');
    readonly emailPerfil = input<string>('dayman@novaes.com.br')
}