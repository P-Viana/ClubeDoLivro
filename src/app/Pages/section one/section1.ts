import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
// COMPONENTE Section one
@Component({
  imports: [CommonModule, RouterModule],
  selector: 'section1',
  templateUrl: './section1.html',
  styleUrl: './section1.css'
})
export class Section1 {
    noticias = [
        { 
            titulo: 'Fim de um ciclo!', 
            subtitulo: 'Como terminou o ano 2025 para o clube?', 
            data: 'Dezembro de 2025',
            texto: [
                `
                O ano acabou e o clube terminou com algo inédito!
                Lemos em média um livro por mês, e concluímos este 
                ano com 3 livros completos! Agradescemos a todos por 
                este ano incrível e esperamos que este ano que vai 
                começar seja repleto de novas leituras e conhecimentos!
                `,
                `
                Adiantamos a todos que este ano que vai chegar está
                repleto de novas leituras! Começaremos em grande estilo
                com um clássico da literatura mundial, o livro "A Volta
                ao Mundo em 80 dias" de Júlio Verne! Se preparem para
                uma experiência única, pois este livro não tem
                igual! Boas férias e boa leitura para todos!
                `
            ] 
        }
    ]
    get noticiasReversas() {
        return [...this.noticias].reverse();
    }

}