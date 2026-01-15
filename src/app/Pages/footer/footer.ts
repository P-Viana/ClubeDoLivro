import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
// COMPONENTE Footer
@Component({
  imports: [CommonModule, RouterModule],
  selector: 'footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
    readonly nomePerfil = input<string>('Dayman Novaes');
    readonly emailPerfil = input<string>('dayman@novaes.com.br')
}